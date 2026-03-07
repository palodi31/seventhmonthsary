const homeView = document.getElementById("homeView");
const contentSections = document.querySelectorAll(".content-section");
const openButtons = document.querySelectorAll(".open-section");
const backButtons = document.querySelectorAll("[data-back]");

const snapshots = [
  {
    image: "assets/1.jpg",
    title: "",
    caption: "One of my favorite simple dates, because I was with you."
  },
  {
    image: "assets/2.jpg",
    title: "",
    caption: "Everything looked softer that day, maybe because you were there."
  },
  {
    image: "assets/3.jpg",
    title: "",
    caption: "A little memory from one of our happiest moments this month."
  },
  {
    image: "assets/4.jpg",
    title: "",
    caption: "The kind of calm and happy moment I always want to remember."
  },
    {
    image: "assets/5.jpg",
    title: "",
    caption: "One of my favorite simple dates, because I was with you."
  },
  {
    image: "assets/6.jpg",
    title: "",
    caption: "Everything looked softer that day, maybe because you were there."
  },
  {
    image: "assets/7.jpg",
    title: "",
    caption: "A little memory from one of our happiest moments this month."
  },
  {
    image: "assets/8.jpg",
    title: "",
    caption: "The kind of calm and happy moment I always want to remember."
  }
];

const reminders = [
  {
    title: "Eat on time",
    text: "Please don't skip meals, babi. Your tummy deserves love too."
  },
  {
    title: "Drink water",
    text: "Take little sips throughout the day and stay refreshed for me."
  },
  {
    title: "Rest well",
    text: "You don't always have to be strong. Rest is also productive."
  },
  {
    title: "Be gentle with yourself",
    text: "You're doing your best, and I am already proud of you."
  },
  {
    title: "Smile a little",
    text: "Even a tiny smile looks so cute on you, especially on hard days."
  },
  {
    title: "Remember I'm here",
    text: "No matter what kind of day it is, you always have me."
  }
];

function showSection(sectionId) {
  homeView.classList.add("d-none");
  contentSections.forEach(section => section.classList.add("d-none"));
  document.getElementById(sectionId).classList.remove("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  contentSections.forEach(section => section.classList.add("d-none"));
  homeView.classList.remove("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    showSection(button.dataset.target);
  });
});

backButtons.forEach(button => {
  button.addEventListener("click", showHome);
});

function renderSnapshots() {
  const gallery = document.getElementById("snapshotGallery");

  gallery.innerHTML = snapshots.map((item, index) => {
    const tiltOptions = ["-3deg", "2deg", "-1deg", "3deg"];
    return `
      <div class="col-12 col-sm-6 col-lg-3">
        <button class="polaroid snapshot-trigger" style="--tilt: ${tiltOptions[index % tiltOptions.length]}" data-image="${item.image}" data-caption="${item.caption}">
          <img src="${item.image}" alt="${item.title}" class="polaroid-image">
          <p class="polaroid-caption">${item.title}</p>
        </button>
      </div>
    `;
  }).join("");

  document.querySelectorAll(".snapshot-trigger").forEach(card => {
    card.addEventListener("click", () => {
      openPhotoModal(card.dataset.image, card.dataset.caption);
    });
  });
}

function renderReminders() {
  const board = document.getElementById("reminderBoard");

  board.innerHTML = reminders.map(item => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="reminder-sticker">
        <div class="bear-badge">
          <div class="bear-face"></div>
          <div class="bear-nose"></div>
        </div>
        <h3 class="reminder-title">${item.title}</h3>
        <p class="reminder-text">${item.text}</p>
      </div>
    </div>
  `).join("");
}

const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

function openPhotoModal(image, caption) {
  modalImage.src = image;
  modalCaption.textContent = caption;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePhotoModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  document.body.style.overflow = "";
}

closeModalButtons.forEach(button => {
  button.addEventListener("click", closePhotoModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closePhotoModal();
  }
});

renderSnapshots();
renderReminders();
