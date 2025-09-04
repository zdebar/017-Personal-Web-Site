const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let form = this;
    let responseMessage = document.getElementById("responseMessage");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        responseMessage.style.display = "visible";
        form.reset();
      } else {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Error sending message.";
        responseMessage.style.visibility = "visible";
      }
    });
  });
