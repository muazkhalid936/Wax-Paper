const images = ["assets/img/why-choose.png", "assets/img/why-choose.png"];

let currentImageIndex = 0;

function changeImage(direction) {
  currentImageIndex =
    (currentImageIndex + direction + images.length) % images.length;

  const mainImage = document.getElementById("mainImage");

  mainImage.style.opacity = "0";

  setTimeout(() => {
    mainImage.src = images[currentImageIndex];
    mainImage.style.opacity = "1";
  }, 300);
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar.classList.contains("translate-x-full")) {
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}
