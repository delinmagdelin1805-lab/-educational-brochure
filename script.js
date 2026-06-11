/* Educational Brochure Button */

const button =
  document.querySelector("button");

/* Click Effect */

button.addEventListener("click", () => {

  button.innerText =
    "Application Sent";

  setTimeout(() => {

    button.innerText =
      "Apply Now";

  }, 2000);

});