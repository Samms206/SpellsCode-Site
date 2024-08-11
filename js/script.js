//jQuery
$(document).ready(function () {
  //burger click
  $("#burger").click(function () {
    const menu = $("#menu_mobile");
    if (menu.css("display") === "none") {
      menu.css("display", "flex");
    } else {
      menu.css("display", "none");
    }
  });

  //hover button arrow
  $(".button").hover(
    function () {
      $(this).find(".arrow").css("transform", "translateX(5px)");
      $(this).find(".button-bg").css("background-color", "rgb(56,56,56)");
    },
    function () {
      $(this).find(".arrow").css("transform", "translateX(0)");
      $(this).find(".button-bg").css("background-color", "var(--gray2)");
    }
  );

  //hover logo code
  $(".item-slider2-side").hover(
    function () {
      $(this).css({
        transform: "scale(1.1)",
        "background-color": "rgba(255, 255, 255, 0.05)",
      });
      $(this).find(".icon-output").css({
        filter: "grayscale(0%)",
        opacity: "100%",
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
        "background-color": "rgba(255, 255, 255, 0)",
      });
      $(this).find(".icon-output").css({
        filter: "grayscale(100%)",
        opacity: "40%",
      });
    }
  );

  //click accordion
  $(".accordion").click(function () {
    const answer = $(this).find(".answer");
    const close = $(this).find(".x-faq");
    const blur = $(this).find(".accor-blur1");

    close.css("transition", "all ease-in 0.3s");

    if (
      answer.css("height") === "1px" ||
      answer.css("height") === "0px"
    ) {
      answer.css({
        height: answer.prop("scrollHeight") + "px",
        transition: "height 0.3s ease",
      });
      close.css("transform", "rotate(45deg)");
      blur.css("opacity", "1");
    } else {
      answer.css({
        height: "0px",
        transition: "height 0.3s ease",
      });
      close.css("transform", "rotate(0deg)");
      blur.css("opacity", "0");
    }
  });

  //move blur accrodion
  $(".accordion").mousemove(function (e) {
    const containerOffset = $(this).offset();
    const containerWidth = $(this).width();
    const mouseX = e.pageX - containerOffset.left;

    // Membatasi gerakan hanya di dalam container
    if (mouseX >= 0 && mouseX <= containerWidth) {
      $(this)
        .find(".accor-blur1")
        .css("left", mouseX + "px");
    }
  });

  //
});
//end jQuery

//item slider3 hover
$("#item_slider3").hover(
  function () {
    $(this).find("#img_front").css("transform", "scale(1.14)");
    $(this).find("#img_back").css("transform", "scale(1)");
  },
  function () {
    $(this).find("#img_front").css("transform", "scale(1)");
    $(this).find("#img_back").css("transform", "scale(1.14)");
  }
);

//image slider hover
const container = document.querySelector(".container-image-slider");
const slider = document.querySelector(".slider");
container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const xPos = ((e.clientX - rect.left) / rect.width) * 100;
  container.style.setProperty("--position", `${xPos}%`);
  slider.value = xPos;
});
container.addEventListener("mouseleave", () => {
  container.style.setProperty("--position", "50%");
  slider.value = 50;
});
slider.addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}%`);
});
//hide overlay
const wrapper = document.getElementById("scrollableWrapper");
const leftOverlay = document.querySelector(".overlay-left-top");
const rightOverlay = document.querySelector(".overlay-right-top");
const tolerance = 1;
wrapper.addEventListener("scroll", () => {
  const scrollLeft = wrapper.scrollLeft;
  const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
  if (scrollLeft > 0) {
    leftOverlay.style.opacity = "1";
  } else {
    leftOverlay.style.opacity = "0";
  }
  if (scrollLeft < maxScrollLeft - tolerance) {
    rightOverlay.style.opacity = "1";
  } else {
    rightOverlay.style.opacity = "0";
  }
});
// Initialize opacity
leftOverlay.style.opacity = "0";
