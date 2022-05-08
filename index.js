
document.querySelector(".cookie_button").addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 8) + 1;

  // let randomImageSource = `images/cookie ${randomNumber} .png`
  let randomImageSource = "images/cookie" + randomNumber + ".png";
  let image = document.querySelector("img.fortune_cookie_img").setAttribute("src", randomImageSource);
});
