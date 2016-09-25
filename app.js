var total = 0;

$(document).ready(function() {
  $('#employee-info').on('submit', function(event) {
    event.preventDefault();

    var employee = {};

    var fields = $('#employee-info').serializeArray();
    console.log('fields', fields);

    fields.forEach(function (element, index) {
      employee[element.name] = element.value;
    });
    console.log('employee object', employee);

    $('#employee-info').find('input[type=text]').val('');

    appendDom(employee);
    });

    function appendDom(emp) {
      var $emp = $('<tr class="employee"></tr>');
      var $tableData = $('<td>' +  emp.employeeFirstName + '</td><td>' + emp.employeeLastName + '</td><td>' +
        emp.idNumber + '</td><td>' + emp.jobTitle + '</td><td id="annSal">' + emp.annualSalary + '</td><td><button id="deleteButton">Delete</button></td>')

      //$tableData.data('salary', emp.annualSalary);
      $emp.data('salary', emp.annualSalary);

      $emp.append($tableData);

      $('table').append($emp);

      var $sal = $emp.data('salary');
      //$tableData.data('salary')

      total += Math.round($sal);

      console.log(total);

      $('span').text(total);

  };

$('.employeeList').on('click', '#deleteButton', function () {

  var deleteB = $(this).parents('tr').data('salary');
  console.log(deleteB);

  total -= deleteB;

  $('span').text(total);

  $(this).parents('tr').remove();
});

});
