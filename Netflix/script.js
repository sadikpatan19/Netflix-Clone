const slider = document.getElementById("slider");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      const slideWidth = document.querySelector(".slide").offsetWidth + 20;

      function moveSlide(step) {
        slider.scrollBy({ left: step * slideWidth, behavior: "smooth" });
      }

      function updateButtons() {
        prevBtn.classList.toggle("hidden", slider.scrollLeft <= 0);
        nextBtn.classList.toggle(
          "hidden",
          slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1
        );
      }

      slider.addEventListener("scroll", updateButtons);
      window.addEventListener("resize", updateButtons);