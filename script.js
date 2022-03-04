// alert("Welcome to The Grenache Site! Click on the logo to navigate the mobile version of our website.");

const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('naviList');

toggleButton.addEventListener('click', () => {
  naviList.classList.toggle('active');
})

let loaderContainer = document.querySelector(".loader-container");
window.addEventListener('load', function(){
	loaderContainer.style.display = 'none';
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}