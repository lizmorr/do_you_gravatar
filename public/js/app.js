$("#gravatar_checker").on("submit", function (event) {
  event.preventDefault();
  var email=$("#email").val();
  $.get("/email?email=" + email, function(getImage) {
    $("body").append("<img src=\"" + getImage + "\"></img>");
  });
});
