const ctx1 = document.getElementById('doughnut');
new Chart (ctx1, {
    type: 'doughnut',
    data: {
      labels: [
        'Disputed',
        'Invoiced',
        'Pending Approval',
        'accounts-pending-approval'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [37, 13, 30, 16],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(54, 162, 45)'
        ],
        hoverOffset: 4
      }]
    },
  });
  