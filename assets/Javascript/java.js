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


function toggleFAQ(element) {
  // Close all other FAQ answers
  const allAnswers = document.querySelectorAll('.faq-answer');
  const allIcons = document.querySelectorAll('.faq-question i');
  
  allAnswers.forEach(answer => {
    if (answer !== element.nextElementSibling) {
      answer.classList.add('hidden');
    }
  });
  
  allIcons.forEach(icon => {
    if (icon !== element.querySelector('i')) {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });

  // Toggle the clicked FAQ
  const answer = element.nextElementSibling;
  const icon = element.querySelector('i');
  
  answer.classList.toggle('hidden');
  
  if (answer.classList.contains('hidden')) {
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-plus');
  } else {
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
  }
}

