$(document).ready(function() {
  var createRow = function(data) {
    // Create a new table row element
    var tRow = $("<tr>");

    var letterBtn;

    var inputBox;
    var textEvent;
    var timeUse = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    for (var i = 0; i < timeUse.length; i++) {
      //tRow = $("<tr>");
      //alert(time[i]);
      tRow = $("<tr>");
      tRow.addClass("table-secondary");

      inputBox = $("<input>");
      inputBox.addClass("event");
      //   inputBox.attr("readonly", false);
      inputBox.attr("disabled", true);
      inputBox.attr("data-text", timeUse[i]);

      letterBtn = $("<button>");
      letterBtn.addClass("btn btn-success btn-choice");
      letterBtn.attr("data-letter", timeUse[i]);
      letterBtn.text("Edit");

      var time = $("<td>").text(timeUse[i]);
      var event = $("<td>").append(inputBox);
      var status = $("<td>").append(letterBtn);

      //var status = $(".btn").text("Edit");
      // Append the newly created table data to the table row
      tRow.append(time, event, status);
      // Append the table row to the table body
      $("tbody").append(tRow);
      //$("<br>");
    }
  };
  createRow();
});
