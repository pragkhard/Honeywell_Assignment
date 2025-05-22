$(document).ready(function () {
    // datepicker 
    $("#datepickerone,#datepickertwo").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());

    $("#datepickerthree").datepicker({
        autoclose: true,
        todayHighlight: true
    });

    // modal 
    $('#exampleModal').modal('show');


});

(function setup(event) {
    // event.preventDefault();
    // event.stopPropagation();
    var task_projecttype = document.getElementById("projecttype");
    var task_projectname = document.getElementById("projectname");
    var task_taskname = document.getElementById("taskname");
    var task_taskdescription = document.getElementById("taskdescription");
    var task_assignor = document.getElementById("assignor");
    var task_assignee = document.getElementById("assignee");
    var task_datepickerone = document.getElementById("datepickerone");
    var task_datepickertwo = document.getElementById("datepickertwo");
    var task_datepickerthree = document.getElementById("datepickerthree");
    var task_Estimatedhours = document.getElementById("Estimatedhours");
    var task_status = document.getElementById("status");
    var task_repository = document.getElementById("repository");
    var task_comments = document.getElementById("comments");
    var tableElem = document.getElementById("table");

    document.getElementById("submit").addEventListener("click", function (event) {
        event.stopPropagation();
        var newRow = tableElem.insertRow(-1);
        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(task_projecttype.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(1);
        newText = document.createTextNode(task_projectname.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(2);
        newText = document.createTextNode(task_taskname.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(3);
        newText = document.createTextNode(task_taskdescription.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(4);
        newText = document.createTextNode(task_assignor.value);
        newCell.appendChild(newText);


        newCell = newRow.insertCell(5);
        newText = document.createTextNode(task_assignee.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(6);
        newText = document.createTextNode(task_datepickerone.value);
        newCell.appendChild(newText);
        console.log(task_datepickerone)

        newCell = newRow.insertCell(7);
        newText = document.createTextNode(task_datepickertwo.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(8);
        newText = document.createTextNode(task_datepickerthree.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(9);
        newText = document.createTextNode(task_Estimatedhours.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(10);
        newText = document.createTextNode(task_status.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(11);
        newText = document.createTextNode(task_repository.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(12);
        newText = document.createTextNode(task_comments.value);
        newCell.appendChild(newText);



        task_projecttype.value = "";
        task_projectname.value = "";
        task_taskname.value = "";
        task_taskdescription = "";
        task_assignor = "";
        task_assignee = "";
        task_datepickerone = "";
        task_datepickertwo = "";
        task_datepickerthree = "";
        task_Estimatedhours = "";
        task_status = "";
        task_repository = "";
        task_comments = "";
        tableElem.value = "";


    });
})();


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();

                }
                else {
                    $('#exampleModal').modal('hide');
                    event.preventDefault();
                    event.stopPropagation();

                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

