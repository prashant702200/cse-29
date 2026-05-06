let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    employees.push({ name, id, salary, dept });
    alert("Employee Added!");
}

function displayAll() {
    let out = "";
    employees.forEach(e => {
        out += `${e.name} - ${e.salary} - ${e.dept} <br>`;
    });
    document.getElementById("output").innerHTML = out;
}

function salaryAbove() {
    let out = "";
    employees.filter(e => e.salary > 50000)
             .forEach(e => {
                out += `${e.name} - ${e.salary}<br>`;
             });
    document.getElementById("output").innerHTML = out;
}

function totalSalary() {
    let total = employees.reduce((sum, e) => sum + e.salary, 0);
    document.getElementById("output").innerHTML = "Total Salary: " + total;
}

function averageSalary() {
    let total = employees.reduce((sum, e) => sum + e.salary, 0);
    let avg = employees.length ? total / employees.length : 0;
    document.getElementById("output").innerHTML = "Average Salary: " + avg;
}

function countDept() {
    let count = {};
    employees.forEach(e => {
        count[e.dept] = (count[e.dept] || 0) + 1;
    });

    let out = "";
    for (let d in count) {
        out += `${d}: ${count[d]}<br>`;
    }
    document.getElementById("output").innerHTML = out;
}