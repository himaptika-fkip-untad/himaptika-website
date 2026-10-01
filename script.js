document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ANIMASI SAAT SCROLL
    ===================================================== */

    const animatedElements = document.querySelectorAll(
    ".academic-program-card, " +
    ".academic-intro-grid > div, " +
    ".academic-cta-box, " +
    ".stat, " +
    ".statistik-card"
);

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element, index) {

        element.classList.add("scroll-animation");

        element.style.transitionDelay =
            (index * 0.08) + "s";

        observer.observe(element);

    });



    /* =====================================================
       ANIMASI HERO
    ===================================================== */

    const heroText =
        document.querySelector(".academic-hero-text");

    const heroNumber =
        document.querySelector(".academic-hero-number");


    if (heroText) {

        setTimeout(function () {

            heroText.classList.add("hero-show");

        }, 150);

    }


    if (heroNumber) {

        setTimeout(function () {

            heroNumber.classList.add("hero-number-show");

        }, 400);

    }



    /* =====================================================
       EFEK ACADEMIC SURVIVAL WEB
    ===================================================== */

    const survivalCard =
        document.querySelector(".academic-featured");


    if (survivalCard) {

        survivalCard.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    survivalCard.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -2;

                const rotateY =
                    ((x - centerX) / centerX) * 2;


                survivalCard.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-6px)`;

            }
        );


        survivalCard.addEventListener(
            "mouseleave",
            function () {

                survivalCard.style.transform =
                    "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

            }
        );

    }



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });
/* =====================================================
   DARK MODE
===================================================== */

const darkModeToggle =
    document.querySelector("#darkModeToggle");

if (darkModeToggle) {

    darkModeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark-mode");

        }
    );

}
});