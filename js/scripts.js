$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);

    var reasonInput = $("input#reason").val();
    $(".reason").text(reasonInput);

    var dateInput = $("input#date").val();
    $(".date").text(dateInput);
    
    var timeInput = $("input#time").val();
    $(".time").text(timeInput);

    $("#story").show();

    event.preventDefault();
  });
});
