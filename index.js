// fade section
const fadeSections = document.querySelectorAll(".fade-in");
fadeSections.forEach(section => {
  const sectionTop = section.offsetTop;
  const sectionBottom = sectionTop + section.offsetHeight;

  // Add an event listener to the window's "scroll" event
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    // Check if the section is in view
    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      section.classList.add('visible');
    }
  });
});


// darkmode checkbox
const check = document.getElementById('customSwitches');
var body = document.getElementById('html');

// dark mode section
var currentMode = "dark";
$(".custom-control-input").click(function() {
  if (currentMode === "light") {
    toNight();
  } else if (currentMode === "dark") {
    toDay();
  }
  var isDarkMode = body.classList.contains('night');
  console.log(isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);
});
var isDarkMode = localStorage.getItem('darkMode');
// console.log(isDarkMode);
if (isDarkMode == 'true') {
  toNight();
  check.checked = true;
} else {
  toDay();
  check.checked = false;


}

function toNight() {
  $(".fa-github").removeClass("fa-github-light");
  $(".fa-github").addClass("fa-github-dark");
  currentMode = "dark";

  $("html").removeClass("light");
  $(".navbar").removeClass("light");
  $(".row").removeClass("light");
  $("#footer").removeClass("light");
  $("#music").removeClass("light");
  $("#projects").removeClass("light");
  $("#highlights").removeClass("light");
  $(".card-body").removeClass("light");
  $(".navbar").removeClass("navbar-light");
  $(".card").removeClass("light-card");
  $(".image-container-h").removeClass("light");
  $("#intro-2").removeClass("light");



  $("html").addClass("night");
  $(".navbar").addClass("night");
  $(".row").addClass("night");
  $("#footer").addClass("night");
  $("#music").addClass("night");
  $("#projects").addClass("night");
  $("#highlights").addClass("night");
  $(".card-body").addClass("night");
  $(".card").addClass("night-card");
  $("#intro-2").addClass("night");
  $(".image-container-h").addClass("night");


  $(".navbar").addClass("navbar-dark");
}
function toDay() {
  $(".fa-github").removeClass("fa-github-dark");
  $(".fa-github").addClass("fa-github-light");

  currentMode = "light";
  $("html").removeClass("night");
  $(".navbar").removeClass("night");
  $(".row").removeClass("night");
  $("#footer").removeClass("night");
  $("#music").removeClass("night");
  $("#projects").removeClass("night");
  $("#highlights").removeClass("night");
  $(".card-body").removeClass("night");
  $(".image-container-h").removeClass("night");
  $(".navbar").removeClass("navbar-dark");
  $(".card").removeClass("night-card");
  $("#intro-2").removeClass("night");


  $("html").addClass("light");
  $(".navbar").addClass("light");
  $(".row").addClass("light");
  $("#footer").addClass("light");
  $("#music").addClass("light");
  $("#projects").addClass("light");
  $("#highlights").addClass("light");
  $(".card-body").addClass("light");
  $(".navbar").addClass("navbar-light");
  $(".card").addClass("light-card");
  $(".image-container-h").addClass("light");
  $("#intro-2").addClass("light");

}
