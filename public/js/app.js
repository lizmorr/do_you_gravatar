$("#gravatar_checker").on("submit", function (event) {
  event.preventDefault();
  var email=$("#email").val();
  $.get("/email?email=" + email, function(getImage) {
    $("div.picture").replaceWith("<div class=\"picture\"><img src=\"" + getImage + "\"></img></div>");
  });
});
