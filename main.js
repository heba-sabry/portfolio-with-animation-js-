let section = document.querySelector(".our-skills"),
  skills = document.querySelectorAll(".the-progress span");
let statsSection = document.querySelector(".stats"),
  times = document.querySelectorAll(".box .count "),
  started = false;
let eventSection = document.querySelector(".events"),
  days = document.querySelector(".unit .days"),
  hour = document.querySelector(".unit .hours"),
  minutes = document.querySelector(".unit .minutes"),
  seconds = document.querySelector(".unit .seconds"),
  countDownData = new Date("July 20 2023 23:59:59").getTime();
let landing = document.querySelector(".landing"),
  up = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    skills.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      times.forEach((time) => startCount(time));
    }
    started = true;
  }
  if (window.scrollY > landing.offsetTop + 500) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
function startCount(el) {
  let goal = el.dataset.end;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
let count = setInterval(() => {
  let dateNow = new Date().getTime();
  let diffData = countDownData - dateNow;
  let d = Math.floor(diffData / (1000 * 60 * 60 * 24));
  days.innerHTML = d;
  let h = Math.floor((diffData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hour.innerHTML = h;
  let m = Math.floor((diffData % (1000 * 60 * 60)) / (1000 * 60));
  minutes.innerHTML = m;
  let s = Math.floor((diffData % (1000 * 60)) / 1000);
  seconds.innerHTML = s;
  if ((diffData = 0)) {
    clearInterval(count);
    alert("Happy Birth Day");
  }
}, 1000);
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
