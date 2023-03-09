// Get the modal
let modal = document.getElementById("myModal");
modal.style.display = "none";
// Get the modal image
let modalImg = document.getElementById("img01");

// Get the caption text
let captionText = document.getElementById("caption");

// Get the aside and nav elements
let aside = document.getElementById("aside");
let nav = document.getElementById("nav");

// Get all the images
let images = document.querySelectorAll('.obrazekEfekt');
console.log(images);

// Loop through all the images
images.forEach(function (img) {
  // Add an event listener to each image
  img.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    aside.hidden = true;
    nav.hidden = true;
  });
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  aside.hidden = false;
  nav.hidden = false;
}
// When the user clicks outside the modal, close the modal
document.addEventListener('click', function (event) {
  if (!(event.target.closest("img")) && modal.style.display == "block") {
    modal.style.display = "none";
    aside.hidden = false;
    nav.hidden = false;
  }
});


let sipka = document.createElement('div');
sipka.innerHTML = '<p> Nahoru <b>&uarr;</b></p > ';
sipka.style.cssText = `
        position: fixed;
        bottom: 35px;
        right: 20px;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        font-weight: 500;
		color:hsl(206, 58%, 21%)`;

document.body.appendChild(sipka);
window.addEventListener('scroll', function () {
  if ((window.scrollY > (window.innerHeight / 3)) && window.innerWidth > 2000) {
    sipka.style.display = 'block';
  } else {
    sipka.style.display = 'none';
  }
});

sipka.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
