// loader
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 1500);
});


document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); 
    const href = link.getAttribute("href"); 


    document.getElementById("preloader").classList.remove("hidden");

    setTimeout(() => {
      window.location.href = href;
    }, 1000);
  });
});


// backToTop
const backToTopButton = document.getElementById('backToTop');


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
    backToTopButton.classList.remove('hide');
  } else {
    backToTopButton.classList.add('hide');
    backToTopButton.classList.remove('show');
  }
});


backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});

// testforscroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("testforscroll");
  const nextSection = document.querySelector("section"); 
  if (window.scrollY > 100) {
      navbar.classList.add("fixed-top");
      navbar.classList.add("shadow");
      nextSection.style.marginTop = `${navbar.offsetHeight}px`; 
  } else {
      navbar.classList.remove("fixed-top");
      navbar.classList.remove("shadow");
      nextSection.style.marginTop = "0";
  }
});


