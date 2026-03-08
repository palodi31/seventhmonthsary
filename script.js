const homeView = document.getElementById("homeView");
const contentSections = document.querySelectorAll(".content-section");
const openButtons = document.querySelectorAll(".open-section");
const backButtons = document.querySelectorAll("[data-back]");

const snapshots = [
  {
    image: "assets/1.jpg",
    title: "",
    caption: "Batangass visittt hehehe (mabait pa)"
  },
  {
    image: "assets/2.jpg",
    title: "",
    caption: "SM naaa (hindi na mabait)"
  },
  {
    image: "assets/3.jpg",
    title: "",
    caption: ""
  },
  {
    image: "assets/4.jpg",
    title: "",
    caption: "Breaktime yung photobooth, DIY na lang hahaha"
  },
    {
    image: "assets/5.jpg",
    title: "",
    caption: ""
  },
  {
    image: "assets/6.jpg",
    title: "",
    caption: "Hmmmm san kayaa toooo"
  },
  {
    image: "assets/7.jpg",
    title: "",
    caption: "Hmmmmm ano kaya next na nangyariii"
  },
  {
    image: "assets/8.jpg",
    title: "",
    caption: "Naghahanap ng foods pero my isang busong na agad hehehe(me)"
  },
    {
    image: "assets/9.jpg",
    title: "",
    caption: ""
  },
  {
    image: "assets/10.jpg",
    title: "",
    caption: "Shawarmersss sarappp (both) hehehe"
  },
  {
    image: "assets/11.jpg",
    title: "",
    caption: "Padreee Burgoss visittt (na-miss kooo tooo)"
  },
  {
    image: "assets/12.jpg",
    title: "",
    caption: ""
  },
    {
    image: "assets/13.jpg",
    title: "",
    caption: ""
  },
  {
    image: "assets/14.jpg",
    title: "",
    caption: ""
  },
  {
    image: "assets/15.jpg",
    title: "",
    caption: "Badinggg"
  },
  {
    image: "assets/16.jpg",
    title: "",
    caption: "Badinggg(2)"
  },
    {
    image: "assets/17.jpg",
    title: "",
    caption: ""
  }
];

const reminders = [
  {
    title: "Eat on time",
    text: "Lessen ang hotdogg hahahaha. Kahitt egg naaa langgg siguroo. Ako na lang bahala sa hotdog mo hehehe"
  },
  {
    title: "You're Prettyyy",
    text: "No need to remind youu namannn, araw-araww naa yannn hehehehe"
  },
  {
    title: "Rest well babii",
    text: "Rest is also productive, wag masyadooo magpaka-stress. Chill chill langg hahaha"
  },
  {
    title: "I'll always bee heree",
    text: "When youu need something, just say a word babii ah. Sabihinn mooo lahatt, kahitt anoo talagaa"
  },
  {
    title: "Alwayss wear your prettyy smilee",
    text: "Para di ka naaa mukhang paiyakk daw hahahaha. Cuteee moo kayaa pag nag-ssmileee loveee hehehe"
  },
  {
    title: "Remember I'm here",
    text: "Kahit anong mamngyari, dito lang ako lagi sa tabii mooo"
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
