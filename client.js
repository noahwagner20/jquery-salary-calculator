$(document).ready(readyNow);

function readyNow() {
    console.log('hello world'); //making sure client.js is working
    $('#submitB').on('click' , newEmployee)
    $('body').on('click', '.fire', deleteEmployee);
}

function newEmployee() {
   let firstName = $('#firstNameIn').val(); //getting all values from input fields and setting them as variables
   let lastName = $('#lastNameIn').val();
   let employeeID = $('#idIn').val();
   let employeeTitle = $('#titleIn').val();
   let employeeSalary = $('#salaryIn').val();
   
   //equation to get monthey expenses
   annualExpenses = Number(employeeSalary);

    $('#employeeInputs').append ( ` <tr id = 'newRow' data-salary=${employeeSalary}">
                                    <td>${firstName}</td>   
                                    <td>${lastName}</td>
                                    <td>${employeeID}</td>
                                    <td>${employeeTitle}</td> 
                                    <td class = employeeSalary> ${employeeSalary}</td>
                                    <td>
                                    <button class = 'fire' type =button>Fire Employee</button>
                                    </td>
                                    </tr>
                                `);

    $('#firstNameIn').val(''); //resetting inputs
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');

    updateList(); //calling update list to do mathsssssss and empty and append new line
}

function updateList() {
    let monthly = annualExpenses / 12;
    $('#monthlyTogether').empty()
    $('#monthlyTogether').append(monthly.toFixed(2));

    //turn text red if totalMonthly >= 20000
    if (monthly >= 20000) {
        document.getElementById("monthlyTogether").style.color = '#FF0000';
    } else {
        document.getElementById("monthlyTogether").style.color = '#000000';
    }
}

function deleteEmployee() {
    $(this).closest('tr').remove();
}

