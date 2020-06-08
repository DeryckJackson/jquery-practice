$(document).ready(function() {
  let messages = ["This is a header.", "This is a paragraph.", "This is an image."]
  $(this).click(function() {
    if(this === "h1") {
      alertMessage(messages[0]);
    } else if (this === "p") {
      alertMessage(messages[1]);
    } else {
      alertMessage(messages[2]);
    }
  });

});

const alertMessage = function (message) {
  alert(message);
}