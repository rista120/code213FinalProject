// REVEAL FUNCTION
const reveal = (Element) => {
  Element.classList.add("reveal");
};

const hide = (Element) => {
  Element.classList.remove("reveal");
};

/* *********************
 * PRELOADER
 ********************* */
const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
    setTimeout(showSlider, 600);
  }, 1000);
});

/* *********************
 * NAVLINKS
 ********************* */
const navbar = document.querySelector("nav");
const navlist = document.querySelector(".navlinks");

const logoBtn = document.querySelector("#logo");
const hmenuBtn = document.querySelector("#hmenu");
const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const servicesBtn = document.querySelector("#service-btn");
const projectBtn = document.querySelector("#projects-btn");
const contactBtn = document.querySelector("#contact-btn");

const buttons = [
  logoBtn,
  homeBtn,
  aboutBtn,
  servicesBtn,
  projectBtn,
  contactBtn,
];

const lightMod = () => {
  navbar.classList.add("lightmod");
};

const darkMod = () => {
  navbar.classList.remove("lightmod");
};

/* *********************
 * SECTIONS
 ********************* */

/* **
 * HERO SECTION
 ** */

const sliderImgContainer = document.querySelector(".slider-img-container");
const sliderImgIcons = sliderImgContainer.children;
const sliderTextHider = document.querySelector(".slider-text-hider");
const sliderText = document.querySelector(".slider-project-container");

// Slider

sliderImgContainer.addEventListener("click", () => {
  sliderImgContainer.appendChild(sliderImgIcons[0]);
  let itemText = document.querySelectorAll(".project-text");
  sliderText.appendChild(itemText[0]);
});

// Show / Hide Functions
// Show
const showSlider = () => {
  reveal(sliderImgContainer);

  setTimeout(() => {
    for (img of sliderImgIcons) {
      reveal(img);
    }
  }, 300);

  setTimeout(() => {
    reveal(sliderTextHider);
  }, 1000);
};

//Hide
const hideSlider = () => {
  hide(sliderTextHider);

  hide(sliderImgContainer);

  for (img of sliderImgIcons) {
    hide(img);
  }
};

/* **
 * ABOUT SECTION
 ** */
const aboutSection = document.querySelector("#about-section");
const aboutSectionContainer = document.querySelector(
  "#about-section>.container"
);
const aboutElements = aboutSectionContainer.children;

// Show / Hide Functions

const showAbout = () => {
  reveal(aboutSection);
  let t = 1000;
  for (let i = 0; i < aboutElements.length; i++) {
    let e = aboutElements[i];
    setTimeout(() => {
      reveal(e);
    }, t);
    t += 300;
  }
  setTimeout(lightMod, 750);
};

const hideAbout = () => {
  hide(aboutSection);

  for (let i = 0; i < aboutElements.length; i++) {
    hide(aboutElements[i]);
  }
  setTimeout(darkMod, 200);
};

/* **
 * PROJECTS SECTION
 ** */
const projectSection = document.querySelector("#project-section");
const projectBg = document.querySelector(".project-bg");
const projectElements = projectSection.children;

// Show / Hide Functions

//show
const showProject = () => {
  reveal(projectBg);
  setTimeout(() => {
    reveal(projectSection);
  }, 1000);

  let t = 1800;
  for (let i = 0; i < projectElements.length; i++) {
    setTimeout(() => {
      console.log(projectElements[i]);
      reveal(projectElements[i]);
    }, t);
    t += 300;
  }
};

//hide
const hideProject = () => {
  hide(projectSection);
  for (let i = 0; i < projectElements.length; i++) {
    hide(projectElements[i]);
  }
  setTimeout(() => {
    hide(projectBg);
  }, 500);
};

/* **
 * CONTACT SECTION
 ** */
const contactSection = document.querySelector("#contact-section");
const contactBg = document.querySelector(".contact-bg");
const contactContainer = document.querySelector(".contact-container");
const contactElements = contactContainer.children;

// Show / Hide Functions
const showContact = () => {
  reveal(contactBg);
  setTimeout(() => {
    reveal(contactSection);
  }, 500);
  let t = 1500;
  for (let i = 0; i < contactElements.length; i++) {
    let e = contactElements[i];
    setTimeout(() => {
      reveal(e);
    }, t);
    t += 300;
  }
};

const hideContact = () => {
  for (let i = 0; i < contactElements.length; i++) {
    let e = contactElements[i];
    hide(e);
  }
  setTimeout(() => {
    hide(contactSection);
  }, 0);
  setTimeout(() => {
    hide(contactBg);
  }, 500);
};

/* **
 * NAVIGATION
 ** */
const sections = [
  {
    section: "hero",
    btn: homeBtn,
    reveal: showSlider,
    hide: hideSlider,
    duration: 1000,
  },
  {
    section: "about",
    btn: aboutBtn,
    reveal: showAbout,
    hide: hideAbout,
    duration: 1000,
  },
  {
    section: "project",
    btn: projectBtn,
    reveal: showProject,
    hide: hideProject,
  },
  {
    section: "contact",
    btn: contactBtn,
    reveal: showContact,
    hide: hideContact,
  },
];

const removePreviewsSections = (actualSection) => {
  for (let i = 0; i < sections.length; i++) {
    if (i == actualSection) {
      continue;
    }
    sections[i].hide();
  }
};

hmenuBtn.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

const btnClick = () => {
  let isAnimating = false;
  for (let j = 0; j < sections.length; j++) {
    let btn = sections[j].btn;
    btn.addEventListener("click", () => {
      navlist.classList.remove("active");
      if (isAnimating == false) {
        removePreviewsSections(j);
        setTimeout(sections[j].reveal, 1000);
        isAnimating = true;
        setTimeout(() => {
          isAnimating = false;
        }, 2500);
      }
    });
  }
};

btnClick();
