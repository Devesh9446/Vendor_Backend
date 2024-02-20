document.addEventListener('DOMContentLoaded', function() {
    const data = {
        Code: 'BFQ-C1-20-580',
        Customer: 'Company 1',
        Purchaser: 'Sudheer',
        Subject: 'Test',
        Date: '2012-08-06',
        Deadline: '2012-08-06',
        Status: 'Converted'
    };

    const tableBody = document.querySelector('#example tbody');

    for (let i = 0; i < 15; i++) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${data.Code}</td>
            <td>${data.Customer}</td>
            <td>${data.Purchaser}</td>
            <td>${data.Subject}</td>
            <td>${data.Date}</td>
            <td>${data.Deadline}</td>
            <td>
                <select class="colorTextBox">
                    <option value="1">Converted</option>
                    <option value="2">Quoted</option>
                    <option value="3">Requoted</option>
                    <option value="4">Regretted</option>
                </select>
            </td>
        `;
        tableBody.appendChild(newRow);
    }

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
