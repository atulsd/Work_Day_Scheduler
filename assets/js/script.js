$(document).ready(function() {
  var inputBox;
  var timeDisplay = [
    "9 A.M. - 10 A.M.",
    "10 A.M. - 11 A.M.",
    "11 A.M. - 12 P. M.",
    "12 P.M. - 1 P.M.",
    "1 P.M. - 2 P.M.",
    "2 P.M. - 3 P.M.",
    "3 P.M. - 4 P.M.",
    "4 P.M. - 5 P.M."
  ];
  var timeUse = [9, 10, 11, 12, 1, 2, 3, 4];
  var slots = [0, 1, 2, 3, 4, 5, 6, 7];
  var selected;
  var dataObject = { data: "", timeOfevent: "" };
  var storageData = {
    one: "Add event here",
    two: "Add event here",
    three: "Add event here",
    four: "Add event here",
    nine: "Add event here",
    ten: "Add event here",
    eleven: "Add event here",
    twelve: "Add event here"
  };

  var storeData = { time: "", event: "" };
  var data;
  var timeOfevent;
  var arrayValue = [];
  var allValues = [];
  var getSeconds = moment().format("ss");

  changeColor();
  var createRow = function(data) {
    // Create a new table row element
    var tRow;

    var letterBtn;

    var textEvent;
    for (var i = 0; i < timeUse.length; i++) {
      tRow = $("<tr>");
      tRow.addClass("table-secondary");
      tRow.attr("data-row", timeUse[i]);

      inputBox = $("<input>");
      inputBox.addClass("event");
      inputBox.attr("disabled", true);
      inputBox.attr("data-text", timeDisplay[i]);

      letterBtn = $("<button>");
      letterBtn.addClass("btn btn-success btn-choice");
      letterBtn.attr("data-letter", timeUse[i]);
      letterBtn.text("Edit");

      var time = $("<td>").text(timeDisplay[i]);
      var event = $("<td>").append(inputBox);
      var status = $("<td>").append(letterBtn);

      // Append the newly created table data to the table row
      tRow.append(time, event, status);
      // Append the table row to the table body
      $("tbody").append(tRow);
    }
    inputValues();
  };
  createRow();

  $(".btn").on("click", function() {
    var valueButton = $(this).attr("data-letter");

    if ($(this).text() === "Edit") {
      for (var i = 0; i < timeUse.length; i++) {
        if (timeUse[i] === parseInt(valueButton)) {
          selected = slots[i];
          $(".table-secondary")
            .eq(i)
            .addClass("table-info");
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
      saveData();
    }
  });

  function inputValues() {
    storageData = JSON.parse(localStorage.getItem("storedData"));
    if (localStorage.getItem("start") === "1" && storageData != null) {
      $(".event")
        .eq(0)
        .val(storageData.one);
      $(".event")
        .eq(1)
        .val(storageData.two);
      $(".event")
        .eq(2)
        .val(storageData.three);
      $(".event")
        .eq(3)
        .val(storageData.four);
      $(".event")
        .eq(4)
        .val(storageData.nine);
      $(".event")
        .eq(5)
        .val(storageData.ten);
      $(".event")
        .eq(6)
        .val(storageData.eleven);
      $(".event")
        .eq(7)
        .val(storageData.twelve);
    } else if (storageData === null) {
      storageData = {
        one: "Add event here",
        two: "Add event here",
        three: "Add event here",
        four: "Add event here",
        nine: "Add event here",
        ten: "Add event here",
        eleven: "Add event here",
        twelve: "Add event here"
      };

      $(".event")
        .eq(0)
        .val(storageData.one);
      $(".event")
        .eq(1)
        .val(storageData.two);
      $(".event")
        .eq(2)
        .val(storageData.three);
      $(".event")
        .eq(3)
        .val(storageData.four);
      $(".event")
        .eq(4)
        .val(storageData.nine);
      $(".event")
        .eq(5)
        .val(storageData.ten);
      $(".event")
        .eq(6)
        .val(storageData.eleven);
      $(".event")
        .eq(7)
        .val(storageData.twelve);
      localStorage.setItem("start", "1");
    }
  }

  function saveData() {
    var proceed = confirm("Do you want to proceed.");
    if (proceed) {
      saveTolocalstorage();
      location.reload(true);
      $(".event")
        .eq(selected)
        .attr("disabled", true);
      $(this).text("Edit");
      inputValues();
    }
  }

  function saveTolocalstorage() {
    storageData.one = $(".event")
      .eq(0)
      .val();
    storageData.two = $(".event")
      .eq(1)
      .val();
    storageData.three = $(".event")
      .eq(2)
      .val();
    storageData.four = $(".event")
      .eq(3)
      .val();
    storageData.nine = $(".event")
      .eq(4)
      .val();
    storageData.ten = $(".event")
      .eq(5)
      .val();
    storageData.eleven = $(".event")
      .eq(6)
      .val();
    storageData.twelve = $(".event")
      .eq(7)
      .val();
    localStorage.setItem("storedData", JSON.stringify(storageData));
  }

  function changeColor() {
    $("#currentDay").text(moment().format("dddd,  MMMM Do YYYY"));
    startTimer();
  }

  function startTimer() {
    var interval = setInterval(function() {
      renderTime();
    }, 1000);
  }

  function renderTime() {
    var getHours = moment().format("hh");
    var aP = moment().format("a");
    var getMinutes = moment().format("mm");
    var getSeconds = moment().format("ss");

    if (aP === "am" && getHours === "09") {
      if (getMinutes === "00" && getSeconds === "00") {
        location.reload(true);
        storageData = {
          one: "Add event here",
          two: "Add event here",
          three: "Add event here",
          four: "Add event here",
          nine: "Add event here",
          ten: "Add event here",
          eleven: "Add event here",
          twelve: "Add event here"
        };
        localStorage.setItem("storedData", JSON.stringify(storageData));
      }
      $(".table-secondary")
        .eq(0)
        .addClass("table-secondary");
      for (var i = 1; i < 8; i++) {
        $(".table-secondary")
          .eq(i)
          .addClass("table-danger");
      }
    }

    if (aP === "am" && getHours === "10") {
      if (getMinutes === "00" && getSeconds === "00") {
        location.reload(true);
      }
      $(".table-secondary")
        .eq(1)
        .addClass("table-success");
      for (var i = 0; i < 8; i++) {
        if (i === 0) {
          $(".table-secondary")
            .eq(0)
            .addClass("table-warning");
        }
        if (i > 1) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-danger");
        }
      }
    }

    if (aP === "am" && getHours === "11") {
      if (getMinutes === "00" && getSeconds === "00") {
        location.reload(true);
      }
      $(".table-secondary")
        .eq(2)
        .addClass("table-success");
      for (var i = 0; i < 8; i++) {
        if (i <= 1) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-warning");
        }
        if (i > 2) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-danger");
        }
      }
    }

    if (aP === "pm" && getHours === "12") {
      if (getMinutes === "00" && getSeconds === "00") {
        location.reload(true);
      }
      $(".table-secondary")
        .eq(3)
        .addClass("table-success");
      for (var i = 0; i < 8; i++) {
        if (i <= 2) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-warning");
        }
        if (i > 3) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-danger");
        }
      }
    }

    if (aP === "pm" && getHours === "01") {
      if (getMinutes === "00" && getSeconds === "00") {
        location.reload(true);
      }
      $(".table-secondary")
        .eq(4)
        .addClass("table-success");
      for (var i = 0; i < 8; i++) {
        if (i <= 3) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-warning");
        }
        if (i > 4) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-danger");
        }
      }
    }

    if (aP === "pm" && getHours === "02") {
      if (getMinutes === "00" && getSeconds === "00") {
        location.reload(true);
      }
      $(".table-secondary")
        .eq(5)
        .addClass("table-success");
      for (var i = 0; i < 8; i++) {
        if (i <= 4) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-warning");
        }
        if (i > 5) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-danger");
        }
      }
    }

    if (aP === "pm" && getHours === "03") {
      if (getMinutes === "00" && getSeconds === "00") {
        location.reload(true);
      }
      $(".table-secondary")
        .eq(6)
        .addClass("table-success");
      for (var i = 0; i < 8; i++) {
        if (i <= 5) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-warning");
        }
        if (i > 6) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-danger");
        }
      }
    }

    if (aP === "pm" && getHours === "04") {
      if (getMinutes === "00" && getSeconds === "00") {
        location.reload(true);
      }
      $(".table-secondary")
        .eq(6)
        .addClass("table-success");
      for (var i = 0; i < 8; i++) {
        if (i <= 6) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-warning");
        }
        if (i > 7) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-danger");
        }
      }
    }
  }
});
