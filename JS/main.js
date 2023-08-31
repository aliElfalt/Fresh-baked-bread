let header = document.getElementById("header");
let menuIcon = document.getElementById("menu");
let linksUl = document.getElementById("links_ul");
let links = document.querySelectorAll("#links_ul li");
let logo = document.getElementById("logo");
let toTopBtn = document.querySelector("#toTop i");


menuIcon.onclick = () => {
  if (menuIcon.classList.contains("clicked")) {
    linksUl.style.display = "none";
    menuIcon.classList.remove("clicked");
  } else {
    linksUl.style.display = "flex";
    menuIcon.classList.add("clicked");
  }
}

links.forEach(link => {
  link.onclick = () => {
    if (menuIcon.classList.contains("clicked")) {
      linksUl.style.display = "none";
      menuIcon.classList.remove("clicked");
    }
    let section = document.querySelector(link.getAttribute("data-section"));
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

logo.onclick = function () {
  scrollTo({
    top: 0
  });
}

window.onscroll = function () {
  if (scrollY === 0) {
    header.style.position = "relative";
    toTopBtn.style.display = "none";
  } else if (scrollY >= 200) {
    toTopBtn.style.display = "block";
  }
  if (scrollY > 0) {
    header.style.position = "fixed";
  }
}

toTopBtn.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth"
  });
}