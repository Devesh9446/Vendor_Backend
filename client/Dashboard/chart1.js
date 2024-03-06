document.addEventListener("DOMContentLoaded", async function () {
  const fetchData = async (supplierUser, year) => {
    const resp = await fetch(
      `http://localhost:8000/api/v1/users/dashboard/c/${supplierUser}/${year}`
    );
    const resp1 = await resp.json();
    const data = resp1.data;
    price = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
    data.forEach((element) => {
      const monthIndex = getMonthIndex(element.month);
      price[monthIndex] = element.price;
    });
    let ctx = document.getElementById("barChart");
    let existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }
    ctx.getContext("2d").clearRect(0, 0, ctx.width, ctx.height);
    var barColor = "blue";
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "# of Business",
            backgroundColor: barColor,
            data: price,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  };

  const getMonthIndex = (month) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months.indexOf(month);
  };

  await fetchData("Supplier User 1", "2017");

  document.getElementById('supplierUsers').addEventListener('change', async function(){
    const supplierUser = document.getElementById("supplierUsers").value;
      const year = document.getElementById("years").value;
      await fetchData(supplierUser, year);
  });

  document
    .getElementById("years")
    .addEventListener("change", async function () {
      const supplierUser = document.getElementById("supplierUsers").value;
      const year = document.getElementById("years").value;
      await fetchData(supplierUser, year);
    });
});
