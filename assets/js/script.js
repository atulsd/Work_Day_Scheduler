$(document).ready(function() {
  var inputBox;
  var timeUse = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  var slots = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var selected;
  var createRow = function(data) {
    // Create a new table row element
    var tRow;

    var letterBtn;

    var textEvent;

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
      //alert("data text is " + inputBox.attr("data-text"));
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

  $(".btn").on("click", function() {
    //var element = event.target;

    //  var index = element.getAttribute("data-letter");
    //alert("index is:" + index);

    var valueButton = $(this).attr("data-letter");
    for (var i = 0; i < timeUse.length; i++) {
      if (timeUse[i] === parseInt(valueButton)) {
        selected = slots[i];
        alert("Selected is: " + selected);
      }
    }
    var valueButton1 = inputBox.attr("data-text");
    var valueText = $(".event")
      .first()
      .attr("data-text");
    alert("button" + valueButton);
    alert("input box" + valueButton1);
    alert("first child" + valueText);

    $(".event")
      .eq(selected)
      .attr("disabled", false);
    $(this).text("Save");
  });
});
