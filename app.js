$(document).ready(function() {
  // this is the monthly expenses total that is appended to the DOM
  var total = 0;

  // this is an event listener that waits for the information on the form to be submitted
  $('#employee-info').on('submit', function(event) {
    event.preventDefault();

    // the form takes in the information, adds it to an object,
    var employee = {};
    var fields = $('#employee-info').serializeArray();

    fields.forEach(function (element, index) {
      employee[element.name] = element.value;
    });

    $('#employee-info').find('input[type=text]').val('');

    appendDom(employee);
    });

  // this is a function that appends the information taken in by form to the DOM using .data()
  function appendDom(emp) {
      var $emp = $('<tr class="employee"></tr>');
      // this creates the table of info submitted on the form
      var $tableData = $('<td>' +  emp.employeeFirstName +
      '</td><td>' + emp.employeeLastName + '</td><td>' +
        emp.idNumber + '</td><td>' + emp.jobTitle +
        '</td><td>$' + emp.annualSalary +
        '</td><td><button id="deleteButton">Delete</button></td>')

      // the salary is added to the the .data() on the tr element
      $emp.data('salary', emp.annualSalary);

      $emp.append($tableData);

      // the info is appended to the DOM
      $('table').append($emp);

      //the following calculates the monthly salary from the table data and appends it to the montly expenses on the DOM
      var $sal = ( $emp.data('salary') ) / 12;
      $sal = $sal.toFixed(2);
      total += Number($sal);
      $('span').text(total);
  };

// this is an event listener that listens for the delete button to be clicked
  $('.employeeList').on('click', '#deleteButton', function () {
    // it takes in the employee's yearly salary that is stored on the DOM and divides by 12
    var deleteEmployee = ( $(this).parents('tr').data('salary') ) / 12;
    deleteEmployee = deleteEmployee.toFixed(2);

    // removes that total from the monthly expenses on the DOM
    total -= deleteEmployee;
    $('span').text(total);

    // and romves the employee row
    $(this).parents('tr').remove();
  });
});
