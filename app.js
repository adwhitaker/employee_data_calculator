$(document).ready(function() {
  var total = 0;

  $('#employee-info').on('submit', function(event) {
    event.preventDefault();

    var employee = {};

    var fields = $('#employee-info').serializeArray();

    fields.forEach(function (element, index) {
      employee[element.name] = element.value;
    });

    $('#employee-info').find('input[type=text]').val('');

    appendDom(employee);
    });

// function to add employee to table and calculate the monthly salary expenditures
  function appendDom(emp) {
      var $emp = $('<tr class="employee"></tr>');
      var $tableData = $('<td>' +  emp.employeeFirstName + '</td><td>' + emp.employeeLastName + '</td><td>' +
        emp.idNumber + '</td><td>' + emp.jobTitle + '</td><td>$' + emp.annualSalary + '</td><td><button id="deleteButton">Delete</button></td>')

      $emp.data('salary', emp.annualSalary);

      $emp.append($tableData);

      $('table').append($emp);

      total += ( ( $emp.data('salary') ) / 12 ).toFixed(2);

      $('span').text(total);
  };

// event listener to remove employee from the table and update monthly salary expenditures
  $('.employeeList').on('click', '#deleteButton', function () {
    total -= ( ( $(this).parents('tr').data('salary') ) / 12 ).toFixed(2);

    $('span').text(total);

    $(this).parents('tr').remove();
  });

});
