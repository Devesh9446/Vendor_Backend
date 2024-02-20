document.addEventListener('DOMContentLoaded', function() {
    const data = {
        Code: 'BFQ-C1-20-580',
        Customer: 'Company 1',
        Purchaser: 'Sudheer',
        Subject: 'Test',
        PODate: '2012-08-06',
        Value: 'Rs.400',
        Status: 'Accepted',
        Inv:'-',
        Inw:'-',
    };

    const tableBody = document.querySelector('#example tbody');

    for (let i = 0; i < 15; i++) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${data.Code}</td>
            <td>${data.Customer}</td>
            <td>${data.Purchaser}</td>
            <td>${data.Subject}</td>
            <td>${data.PODate}</td>
            <td>${data.Value}</td>
            <td>
                <select class="colorTextBox">
                    <option value="1">Accepted</option>
                    <option value="4">Completed</option>
                    <option value="2">In-progress</option>
                    <option value="3">Released</option>
                </select>
            </td>
            <td>${data.Inv}</td>
            <td>${data.Inw}</td>
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
