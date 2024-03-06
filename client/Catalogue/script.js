let catalogue = document.querySelector(".catalogue");
let Catalogue = document.querySelector(".Catalogue");

new DataTable('#catalogue-example', {
    paging: false,
    scrollCollapse: true,
    scrollY: '200px'
});

 document.addEventListener('DOMContentLoaded',async function(){
    const fetchData=async(supplierUser)=>{
        const resp=await fetch(`http://localhost:8000/api/v1/users/catalogue/c/${supplierUser}`);
        const resp1=await resp.json();
        const data1=resp1.data;
        console.log(data1);
        let tableBody = document.querySelector('#catalogue-example tbody');
        console.log(tableBody);
        tableBody.innerHTML='';
        for (let i = 0; i < data1.length; i++) {
            let newRow = document.createElement('tr');
            const data=data1[i]; 
            newRow.innerHTML = `
                <td>${i+1}</td>
                <td>${data.product}</td>
                <td>
                    <input type="number">
                </td>
                <td>${data.Uom}</td>
                <td>
                    <select name="" class="table-select">
                        <option value="">Select visibility</option>
                    </select>
                </td> 
            `;
            tableBody.appendChild(newRow);
        }
     }
     await fetchData('Supplier User 1');
     document.getElementById('select').addEventListener('change',async function(){
        await fetchData(document.getElementById('select').value);
     })
 })