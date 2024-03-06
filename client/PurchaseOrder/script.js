document.addEventListener('DOMContentLoaded',async function() {
    const fetchData=async(supplierUser)=>{
        console.log(supplierUser);
        const resp=await fetch(`http://localhost:8000/api/v1/users/purchaseOrder/c/${supplierUser}`)
        const resp1=await resp.json();
        const data1=resp1.data;
        const tableBody = document.querySelector('#example tbody');
        tableBody.innerHTML='';
    
        for (let i = 0; i < data1.length; i++) { 
            let newRow = document.createElement('tr');
            const data=data1[i];
            console.log(data);
            newRow.innerHTML = `
                <td>${data.code}</td>
                <td>${data.customer}</td>
                <td>${data.purchaser}</td>
                <td>${data.subject}</td>
                <td>${data.pODate}</td>
                <td>${data.value}</td>
                <td>
                    <select class="colorTextBox">
                        <option value="1">Accepted</option>
                        <option value="4">Completed</option>
                        <option value="2">In-progress</option>
                        <option value="3">Released</option>
                    </select>
                </td>
                <td>${data.inv}</td>
                <td>${data.inw}</td>
            `;
            tableBody.appendChild(newRow);
        }
    }
    await fetchData('Supplier User 1');
    document.getElementById("select").addEventListener("change",async function(){
        const supplierUser=document.getElementById(select).value;
        await fetchData(supplierUser);
    })

    $(document).ready(function () {
        $('#example').DataTable();
         $('select').on('change', function () {
                var selectedValue = $(this).val();
                var colorClass = '';

                switch (selectedValue) {
                    case '1':
                        colorClass = 'accepted';
                        break;
                    case '2':
                        colorClass = 'inProgress';
                        break;
                    case '3':
                        colorClass = 'released';
                        break;
                    case '4':
                        colorClass = 'completed';
                        break;
                    default:
                        colorClass = ''; // Default color if none matches
                        break;
                }

                $(this).closest('tr').find('.colorTextBox').removeClass().addClass('colorTextBox ' + colorClass);
            });

            // Initial call to set the initial color
            $('select').trigger('change');
    });
});
