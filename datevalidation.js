$(function () {
    var dateFormat = "mm/dd/yy",
        from = $("#from")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3
        })
        .on("change", function () {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3
        })
        .on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }

    $(document).on("click", "#check", function () {
        var from = $("#from").datepicker({ dateFormat: 'dd-mm-yy' }).val();
        var to = $("#to").datepicker({ dateFormat: 'dd-mm-yy' }).val();
        var name = $("#nameinput").val();
        if (name == "") {
            $("#empty").html("Your name can't be blank.");
            $("#empty").css("color", "red");
        } 
        else {
            alert("Thanks " + name + "! " + "Your cruise leave on " + from + " and return on " + to +"!");


    }
    })


});
