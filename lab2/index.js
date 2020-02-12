var employees = [
    { code: 0, name: 'Hieu Dang', job: 'Developer', age: 28 },
    { code: 1, name: 'Hung Vu', job: 'Developer', age: 27 },
    { code: 2, name: 'Thong Phung', job: 'Developer', age: 30 }
];

// Remove user
function removeOption() {
    employees.pop();
    $("#employee option:selected").remove();
}

// Add user
function addOption() {
    var employeeId = employees.length;
    var optionName = document.getElementById("name").value;
    var optionJob = document.getElementById("job").value;
    var optionAge = document.getElementById("age").value;
    var newEmployee = {
        code: employeeId,
        name: optionName,
        job: optionJob,
        age: optionAge
    };
    employees.push(newEmployee);
    $("#employee").append(new Option(optionName, employeeId));
}

// callDiv()
function callDiv() {
    if (document.getElementById('form').style.display === "none") {
        document.getElementById('form').style.display = 'block';
    }
    else {
        document.getElementById('form').style.display = "none";
    }
};

// jQuery
$(document).ready(function () {
    $("#employee").change(function () {
        var selected = $(this).children("option:selected");
        $(".info").text((employees[$(selected[0]).val()].name) + ", Age: " + (employees[$(selected[0]).val()].age) + ", Job: " + (employees[$(selected[0]).val()].job));
        console.log(employees[$(selected[0]).val()]);
    });
});
