document.addEventListener('DOMContentLoaded',async function() {
    let dashboard = document.querySelector(".dashboard");
    let Dashboards = document.querySelector(".Dashboards");
    let catalogue = document.querySelector(".catalogue");
    let Catalogue = document.querySelector(".Catalogue");
    let profile = document.querySelector(".profile");
    let Profile = document.querySelector(".Profile");
    
    dashboard.addEventListener("click", () => {
        Catalogue.classList.add("hide");
        Profile.classList.add("hide");
        Dashboards.classList.remove("hide");
    })
    catalogue.addEventListener("click", () => {
        Catalogue.classList.remove("hide");
        Profile.classList.add("hide");
        Dashboards.classList.add("hide");
    
    })
    profile.addEventListener("click", () => {
        Catalogue.classList.add("hide");
        Dashboards.classList.add("hide");
        Profile.classList.remove("hide");
    })
    
    // -------initializing datatable--------
    new DataTable('#catalogue-example', {
        paging: false,
        scrollCollapse: true,
        scrollY: '200px'
    });
    new DataTable('#profile-example', {
        paging: false,
        scrollCollapse: true,
        scrollY: '200px'
    });

    //Bar chart year selector
    var select = document.getElementById("years");
    var currentYear = new Date().getFullYear();
    
    for (var year = 1000; year <= 3000; year++) {
        var option = document.createElement("option");
        option.value = year;
        option.text = year;
        select.appendChild(option);
    }
    select.value = currentYear;
    
    //For Selecting Supplier
    var supplierUsers = ["Supplier User 1", "Supplier User 2", "Supplier User 3", "Supplier User 4"];
    
    // Create select element
    var select = document.createElement("select");
    select.setAttribute("name", "supplierUsers");
    select.setAttribute("id", "supplierUsers");
    
    // Add options
    supplierUsers.forEach(function(user) {
        var option = document.createElement("option");
        option.setAttribute("value", user);
        option.text = user;
        select.appendChild(option);
    });

    // Append select to container
    document.getElementById("select").replaceWith(select);
    
    $(document).ready(function () {
        $('#example').DataTable();
    });

    // <!-- Pie chart -->

    

    const fetchData=async(supplierUser)=>{
        const resp=await fetch(`http://localhost:8000/api/v1/users/pendingAction/c/${supplierUser}`)
        const resp1=await resp.json();
        const data1=resp1.data;
        console.log(data1);
        let tableBody = document.querySelector('#example tbody');
        tableBody.innerHTML='';
        for (let i = 0; i < data1.length; i++) {
            let newRow = document.createElement('tr');
            const data=data1[i];
            newRow.innerHTML = `
                <td>${data.code}</td>
                <td>${data.project}</td>
                <td>
                    <select>
                        <option value="1">High
                        </option>
                        <option value="2">Medium
                        </option>
                        <option value="3">Low
                        </option>
                    </select>
                </td>
                <td>${data.totalAmount}</td>
                <td>${data.date}</td>
                <td>
                    <select class="colorTextBox">
                        <option value="1">accpetance-pending</option>
                        <option value="2">invoice-pending</option>
                    </select>
                </td>
            `;
            tableBody.appendChild(newRow);
        }
    }
    await fetchData('Supplier User 1');
    document.getElementById('supplierUsers').addEventListener("change",async function(){
        await fetchData(document.getElementById('supplierUsers').value);
    })
    
});

window.onload = function () {
    // Initial data for the pie chart
    var initialData = countStatusOptions();

    // Function to update the chart with new data
    function updateChart() {
        var newData = countStatusOptions();
        var options = {
            animationEnabled: true,
            data: [{
                type: "doughnut",
                innerRadius: "80%",
                showInLegend: true,
                legendText: "{label}",
                indexLabel: "{label}: #percent%",
                dataPoints: newData
            }]
        };
        $("#chartContainer").CanvasJSChart(options);
    }

    // Initial rendering of the chart with the initial data
    updateChart();

    // Example of updating the chart after a certain event or user action
    $("#example").on("change", "select", function () {
        updateChart();
    });

    function countStatusOptions() {
        // Get the data from the table
        var statusOptions = {
            "1": 0, // Pending
            "2": 0, // Reject
        };

        $("#example tbody tr").each(function () {
            var status = $(this).find("td:eq(5) select").val();
            statusOptions[status]++;
        });

        // Convert to percentage
        var totalCount = Object.values(statusOptions).reduce((acc, count) => acc + count, 0);
        var percentageOptions = Object.entries(statusOptions).map(([option, count]) => ({
            label: getStatusLabel(option),
            y: (count / totalCount) * 100
        }));

        return percentageOptions;
    }
    // option
    function getStatusLabel(option) {
        switch (option) {
            case "1":
                return "acceptance-pending";
            case "2":
                return "invoice-pending";
            default:
                return "";
        }
    }
    $('select').on('change', function () {
        var selectedValue = $(this).val();
        var colorClass = '';

        switch (selectedValue) {
            case '1':
                colorClass = 'acceptance-pending';
                break;
            case '2':
                colorClass = 'invoice-pending';
                break;
            default:
                colorClass = ''; // Default color if none matches
                break;
        }

        $(this).closest('tr').find('.colorTextBox').removeClass().addClass('colorTextBox ' + colorClass);
    });

    // Initial call to set the initial color
    $('select').trigger('change');
};