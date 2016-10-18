console.log('in app.js');
var app = angular.module('salCalc', []);

app.controller('SalCalculator', function () {
  console.log('SalCalculator loaded');

  var self = this;
  self.employees = [];
  self.totalSalary = 0;

  self.getSalary = function () {
    self.totalSalary = 0;
    self.employees.forEach(function (employee) {
      self.totalSalary += employee.salary;
    });

    self.totalSalary = (self.totalSalary / 12).toFixed(2);
  };

  self.createEmployee = function () {
      self.employees.push(angular.copy(self.employee));
      self.getSalary();
    };

  self.deleteEmployee = function (index) {
    self.employees.splice(index, 1);
    self.getSalary();
  };
});
