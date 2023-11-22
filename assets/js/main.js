// NavBar Hide And Show
var theEnd = 0;
var navbar = document.querySelector(".main-header");
window.addEventListener("scroll", () => {
  var scrollToTop = window.pageXOffset || document.documentElement.scrollTop;
  if (scrollToTop > theEnd) {
    navbar.style.top = "-85px";
  } else {
    navbar.style.top = "0px";
  }
  theEnd = scrollToTop;
});
// Inputs Checkspace
$(document).on("keyup", ".checkSpace", function (e) {
  if ($(this).val().length === 1) {
    e.preventDefault();
    $(this).nextAll("input").first().focus();
  } else {
    $(this).prevAll("input").first().focus();
  }
});
// Inputs Checkspace
// Show And Hide Password
const clickShowPass = document.querySelectorAll(".click-show-pass");
clickShowPass.forEach((eye) => {
  eye.addEventListener("click", (e) => {
    if (eye.parentElement.querySelector(".myInput-show").type === "password") {
      eye.parentElement.querySelector(".myInput-show").type = "text";
    } else {
      eye.parentElement.querySelector(".myInput-show").type = "password";
    }
  });
});
// Show And Hide Password

//////////////////////////////////////////////////

var date = new Date();
let check = document.querySelector(".counter-time");
// let counterValue = $(".counter-time").attr("data-counter")
//   ? $(".counter-time").attr("data-counter")
//   : date.setDate(date.getDate() + 10);
let counterValue = "Apr 27, 2023 23:59:59";
let countDownDate = new Date(counterValue).getTime();
if (check) {
  let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelectorAll(".days").forEach((day) => {
      day.innerHTML = days < 10 ? `0${days}` : days;
    });

    document.querySelectorAll(".hours").forEach((hour) => {
      hour.innerHTML = hours < 10 ? `0${hours}` : hours;
    });

    document.querySelectorAll(".minutes").forEach((minute) => {
      minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    });

    if (dateDiff < 0) {
      clearInterval(counter);
    }
  }, 1000);
}

//////////////////////////////////////////////////

// Checkbox Any Whare

let cbxes = document.querySelectorAll(
  'input[type="checkbox"][data-limit="only-one-in-a-group"]'
);
if (cbxes) {
  [...cbxes].forEach((cbx) => {
    cbx.addEventListener("change", (e) => {
      if (e.target.checked) uncheckOthers(e.target);
    });
  });
  function uncheckOthers(clicked) {
    let name = clicked.getAttribute("name");
    [...cbxes].forEach((other) => {
      if (other != clicked && other.getAttribute("name") == name)
        other.checked = false;
    });
  }
}

// Checkbox Any Whare

// LottieFile Contact Us
// Contact Us
const contactUsAnimationHeader = bodymovin.loadAnimation({
  container: document.getElementById("lottie-anime-contact-us"),
  path: "/assets/json-animation/data-contact-us.json",
  render: 'svg',
  loop: true,
  name: 'contact animation'
})
// Buy Done
const buyDoneAnimationHeader = bodymovin.loadAnimation({
  container: document.getElementById("lottie-anime-buy-done"),
  path: "/assets/json-animation/data-buy-done.json",
  render: 'svg',
  loop: true,
  name: 'contact animation'
})
// LottieFile Contact Us

// Circle Progress

let progress = document.querySelectorAll('.progress');
let progress_text = document.querySelectorAll('.data-progress');
if (progress) {
  progress.forEach((pro) => {
    let percentage = pro.getAttribute('data-value');
    let color = pro.getAttribute('data-stroke');
    let radius = pro.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    let stroke = circumference - (circumference * percentage) / 100;
    pro.style.setProperty('--stroke-dashoffset', stroke);
    pro.style.setProperty('--stroke-dasharray', circumference);
    pro.style.setProperty('--stroke', color);
    pro.style.setProperty('--animation-time', `${percentage * 30}ms`);
  });
  progress_text.forEach((text) => {
    let data = text.getAttribute('data-value');
    let progress_value = 0;
    let progress_bar = setInterval(() => {
      progress_value++;
      text.innerText = `${progress_value}%`;
      if (progress_value == data) {
        clearInterval(progress_bar);
      }
    }, 30);
  });
}


// Circle Progress

// Cards
const joinTheDeal = document.querySelectorAll(".join-the-deal");
const btnsFooter = document.querySelector(".btns-footer");
if (joinTheDeal) {
  joinTheDeal.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.target.style.display = "none";
      e.target.nextSibling.nextElementSibling.style.display = "flex";
    })
  })
}
// Cards
// Card More and Minus
// Plus

const borderBtnPlus = document.querySelectorAll(".border-btn-plus");
if(borderBtnPlus){
  borderBtnPlus.forEach((ele) => {
    ele.addEventListener("click",()=>{
      ++ele.previousElementSibling.textContent
    })
  })
}
// Minus
const borderBtnMinus = document.querySelectorAll(".border-btn-minus");
if(borderBtnMinus){
  borderBtnMinus.forEach((ele) => {
    ele.addEventListener("click",()=>{
      if(ele.nextElementSibling.textContent > "1"){
        --ele.nextElementSibling.textContent
      }
    })
  })
}
// Card More and Minus