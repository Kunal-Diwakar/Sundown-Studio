function lenisScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf);    
}

function swiperAnimation() { 
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
  });
};

function menuAnimation() {

    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");
    var menuIcon = document.querySelector(".ri-menu-3-line");
    var closeIcon = document.querySelector(".ri-close-large-line");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navimg.style.opacity = 0;
            menuIcon.style.display = "none"; // Hide menu icon
            closeIcon.style.display = "block"; // Show close icon
            flag = 1;
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = 1;
            menuIcon.style.display = "block"; // Show menu icon
            closeIcon.style.display = "none"; // Hide close icon
            flag = 0;
        };
    });
};

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4500)
}

loaderAnimation()
lenisScroll();
menuAnimation();
swiperAnimation();
