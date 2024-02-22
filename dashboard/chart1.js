const ctx = document.getElementById('barChart');

var barColor= 'green';
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Business',
      backgroundColor: barColor,
      data: [0, 1100000000, 0, 0, 0, 1500000000, 0, 2500000000, 0, 1100000000, 0, 0],  
    }]
  },
  options: {
    responsive: true
  }
});

new Chart(document.getElementById('lineChart'),{
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Business',
      backgroundColor: barColor,
      data: [0, 1100000000, 0, 0, 0, 1500000000, 0, 2500000000, 0, 1100000000, 0, 0],  
    }]
  },
  options:{
    responsive: true
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("chart");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}