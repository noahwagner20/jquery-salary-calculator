$(document).ready(readyNow);

function readyNow() {
    console.log('hello world'); //making sure client.js is working
    $('#submitB').on('click' , newEmployee)
}

function newEmployee() {
   let firstName = $('firstNameIn').val();
   let lastName = $('lastNameIn').val();
   let employeeID = $('idIn').val();
   let employeeTitle = $('titleIn').val();
   let employeeSalary = $('salaryIn').val();

   //equation to get monthey expenses
   monthlyExpenses += Number(employeeSalary / 12);
}