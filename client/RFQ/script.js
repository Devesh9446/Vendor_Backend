document.addEventListener('DOMContentLoaded',async function() {
    const fetchData=async (supplierUser)=>{
        const resp=(await fetch(`http://localhost:8000/api/v1/users/rfq/c/${supplierUser}`));
        const resp1=await resp.json();
        const data1=resp1.data;
     
        const tableBody = document.querySelector('#example tbody');
        tableBody.innerHTML='';
    
        for (let i = 0; i < data1.length; i++) {
            let newRow = document.createElement('tr');
            const data=data1[i];
            newRow.innerHTML = `
                <td>${data.code}</td>
                <td>${data.customer}</td>
                <td>${data.purchaser}</td>
                <td>${data.subject}</td>
                <td>${data.date}</td>
                <td>${data.deadline}</td>
                <td class="options"> 
                    <select class="colorTextBox">
                        <option value="1" ${data.status === 'Converted' ? 'selected' : ''}>Converted</option>
                        <option value="2" ${data.status === 'Quoted' ? 'selected' : ''}>Quoted</option>
                        <option value="3" ${data.status === 'Requoted' ? 'selected' : ''}>Requoted</option>
                        <option value="4" ${data.status === 'Regretted' ? 'selected' : ''}>Regretted</option>
                    </select>
                </td>
            `;
            tableBody.appendChild(newRow);
        }
    } 
    await fetchData('Supplier User 1');
    document.getElementById('select').addEventListener("change", async function() {
        await fetchData(document.getElementById('select').value);
    });
    $(document).ready(function () {
        $('#example').DataTable();
        $('select').on('change', function () {
            var selectedValue = $(this).val();
            var colorClass = '';

            switch (selectedValue) {
                case '1':
                    colorClass = 'converted';
                    break;
                case '2':
                    colorClass = 'quoted';
                    break;
                case '3':
                    colorClass = 'requoted';
                    break;
                case '4':
                    colorClass = 'regretted';
                    break;
                default:
                    colorClass = '';
                    break;
            }

            $(this).closest('tr').find('.colorTextBox').removeClass().addClass('colorTextBox ' + colorClass);
        });

        $('select').trigger('change');
    });
});
