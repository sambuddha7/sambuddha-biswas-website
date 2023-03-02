
var lord = "light";
$(".custom-control-input").click(function() {
  if (lord === "light") {
    toNight();
  } else if (lord === "dark") {
    toDay();
  }
});
function toNight() {
  $(".fa-github").removeClass("fa-github-light");
  $(".fa-github").addClass("fa-github-dark");
  lord = "dark";

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


  $("html").addClass("night");
  $(".navbar").addClass("night");
  $(".row").addClass("night");
  $("#footer").addClass("night");
  $("#music").addClass("night");
  $("#projects").addClass("night");
  $("#highlights").addClass("night");
  $(".card-body").addClass("night");
  $(".card").addClass("night-card");
  $(".image-container-h").addClass("night");


  $(".navbar").addClass("navbar-dark");
}
function toDay() {
  $(".fa-github").removeClass("fa-github-dark");
  $(".fa-github").addClass("fa-github-light");

  lord = "light";
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
}
