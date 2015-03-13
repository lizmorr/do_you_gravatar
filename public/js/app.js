$("#gravatar_checker").on("submit", function (event) {
  event.preventDefault();
  var email=$("#email").val();
  if(!/@/.test(email)) {
    alert("Please enter a valid email!")
  } else {
    $.get("/email?email=" + email, function(getImage) {
      $("div.picture").replaceWith("<div class=\"picture\"><img src=\"" + getImage + "\"></img></div>");
    });
  }
});
