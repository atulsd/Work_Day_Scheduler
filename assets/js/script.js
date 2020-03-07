$(document).ready(function() {
  var inputBox;
  var timeUse = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  var slots = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var selected;
  var dataObject = { data: "", timeOfevent: "" };
  var sch = [];
  var data;
  var timeOfevent;
  var arrayValue;

  changeColor();
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
    arrayValue = JSON.parse(localStorage.getItem("schL"));
  };
  createRow();

  $(".btn").on("click", function() {
    //var element = event.target;

    //  var index = element.getAttribute("data-letter");
    //alert("index is:" + index);

    var valueButton = $(this).attr("data-letter");
    //alert($(this).text());
    if ($(this).text() === "Edit") {
      var lastData = JSON.parse(localStorage.getItem("value"));
      alert("Old data in local storage is:" + lastData.data);

      $(".event")
        .eq(3)
        .text("hard coding");
      for (var i = 0; i < timeUse.length; i++) {
        if (timeUse[i] === parseInt(valueButton)) {
          selected = slots[i];
          alert("Selected is: " + selected);
        }
      }
      $(".event")
        .eq(selected)
        .attr("disabled", false);
      $(this).text("Save");
    } else if ($(this).text() === "Save") {
      var data = $(".event")
        .eq(selected)
        .val();
      timeOfevent = valueButton;

      // alert("Inputted data is: " + data);
      // dataObject.data += data;
      // dataObject.timeOfevent += timeOfevent;

      sch.push(data, timeOfevent);
      alert("All Values direct in array is: " + sch);
      localStorage.setItem("schL", JSON.stringify(sch));
      // localStorage.sch += JSON.stringify({
      //   data: data,
      //   timeOfEvent: timeOfevent
      // });

      arrayValue = JSON.parse(localStorage.getItem("schL"));

      alert(
        "Data accessed from array is: " +
          arrayValue[0] +
          "Timer is: " +
          arrayValue[1]
      );
      location.reload(true);
      // localStorage.scheduler += alert(
      //   "Data stored in object is: " +
      //     dataObject.data[3] +
      //     dataObject.timeOfevent[3]
      // );

      // localStorage.setItem("value", JSON.stringify(dataObject));

      // var lastData = JSON.parse(localStorage.getItem("value"));

      // alert("fIRST DATA ONLY." + lastData.data + "And" + lastData.timeOfevent);
      $(".event")
        .eq(selected)
        .attr("disabled", true);
      $(this).text("Edit");
    }

    // var valueButton1 = inputBox.attr("data-text");
    // var valueText = $(".event")
    //   .first()
    //   .attr("data-text");
    // alert("button" + valueButton);
    // alert("input box" + valueButton1);
    // alert("first child" + valueText);
  });
  function changeColor() {
    var liveTime = moment().format("LTS");
    $("#currentDay").text(moment().format("dddd,  MMMM Do YYYY"));
  }
});
