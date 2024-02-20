const ctx = document.getElementById('barChart');

var barColor= 'blue';
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Business',
      backgroundColor: barColor,
      data: [0, 1100000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
    }]
  },
  options: {
    responsive: true
  }
});