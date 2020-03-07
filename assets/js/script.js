$(document).ready(function() {
  var inputBox;
  var timeDisplay = [
    "9 A.M.",
    "10 A.M.",
    "11 A.M.",
    "12 P.M.",
    "1 P.M.",
    "2 P.M.",
    "3 P.M.",
    "4 P.M."
  ];
  var timeUse = [9, 10, 11, 12, 1, 2, 3, 4];
  var slots = [0, 1, 2, 3, 4, 5, 6, 7];
  var selected;
  var dataObject = { data: "", timeOfevent: "" };
  var storageData = {
    one: "",
    two: "",
    three: "",
    four: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: ""
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
      //   inputBox.attr("readonly", false);
      inputBox.attr("disabled", true);
      inputBox.attr("data-text", timeDisplay[i]);
      //inputBox.text(storageData.one);
      //alert("data text is " + inputBox.attr("data-text"));

      letterBtn = $("<button>");
      letterBtn.addClass("btn btn-success btn-choice");
      letterBtn.attr("data-letter", timeUse[i]);
      letterBtn.text("Edit");

      var time = $("<td>").text(timeDisplay[i]);
      var event = $("<td>").append(inputBox);
      var status = $("<td>").append(letterBtn);

      //var status = $(".btn").text("Edit");
      // Append the newly created table data to the table row
      tRow.append(time, event, status);
      // Append the table row to the table body
      $("tbody").append(tRow);
      //$("<br>");
    }
    inputValues();
    //    alert("calling function to input values");
    //arrayValue = JSON.parse(vallocalStorage.getItem("schL"));
  };
  createRow();
  // $(".table-secondary").on("click", function() {
  //   alert("Row selected is:" + $(this).attr("data-row"));
  //   $(".table-secondary")
  //     .eq(0)
  //     .addClass("table-danger");
  // });
  $(".btn").on("click", function() {
    //var element = event.target;

    //  var index = element.getAttribute("data-letter");
    //alert("index is:" + index);

    var valueButton = $(this).attr("data-letter");
    //alert($(this).text());
    if ($(this).text() === "Edit") {
      //  var lastData = JSON.parse(localStorage.getItem("value"));
      //alert("Old data in local storage is:" + lastData.data);

      // $(".event")
      //   .eq(3)
      //   .val("hard coding");
      // $(this)
      //   .eq(2)
      //   .addClass("table-danger");
      //.attr("data-row").background-color:#000;
      //.addClass("table-danger");
      //.css("background-color", "#000");

      for (var i = 0; i < timeUse.length; i++) {
        if (timeUse[i] === parseInt(valueButton)) {
          selected = slots[i];
          $(".table-secondary")
            .eq(i)
            .addClass("table-info");
          //        alert("Selected is: " + selected);
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
      //timeOfevent = valueButton;

      // alert("Inputted data is: " + data);
      // dataObject.data += data;
      // dataObject.timeOfevent += timeOfevent;

      //storeData.time = timeOfevent;
      //storeData.event = data;
      //storeData.push(data, timeOfevent);
      //alert("All Values direct in array is: " + storeData);
      //localStorage.setItem("storedData{data,}", JSON.stringify(storeData));
      // localStorage.sch += JSON.stringify({
      //   data: data,
      //   timeOfEvent: timeOfevent
      // });

      //localStorage.setItem("storedData", JSON.stringify(storedData));

      // arrayValue = JSON.parse(localStorage.getItem("storedData"));
      // allValues += arrayValue;
      // alert(
      //   "Data accessed from array storeData before local storage: " +
      //     storeData.time +
      //     "Timer is: " +
      //     storeData.event
      // );

      // alert(
      //   "Data accessed from array arrayValue after local storage: " +
      //     arrayValue.time +
      //     "Timer is: " +
      //     arrayValue.event
      // );

      // alert(
      //   "Data accessed from array allValues after local storage: " +
      //     allValues.time +
      //     "Timer is: " +
      //     allValues.event
      // );

      // localStorage.scheduler += alert(
      //   "Data stored in object is: " +
      //     dataObject.data[3] +
      //     dataObject.timeOfevent[3]
      // );

      // localStorage.setItem("value", JSON.stringify(dataObject));

      // var lastData = JSON.parse(localStorage.getItem("value"));

      // alert("fIRST DATA ONLY." + lastData.data + "And" + lastData.timeOfevent);
      saveData();
    }

    // var valueButton1 = inputBox.attr("data-text");
    // var valueText = $(".event")
    //   .first()
    //   .attr("data-text");
    // alert("button" + valueButton);
    // alert("input box" + valueButton1);
    // alert("first child" + valueText);
  });

  function inputValues() {
    storageData = JSON.parse(localStorage.getItem("storedData"));
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
  }

  function saveData() {
    var proceed = confirm(
      "You have pressed save. \n Page is reloading. \n Any unsaved data will be lost. \n Do you want to proceed."
    );
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
    var liveTime = moment().format("LTS");
    $("#currentDay").text(moment().format("dddd,  MMMM Do YYYY"));
    alert(moment().format("hh:mm:ss a"));
    startTimer();
  }

  function startTimer() {
    var interval = setInterval(function() {
      renderTime();
    }, 1000);
  }

  function renderTime() {
    getSeconds = moment().format("ss");
    //alert("Seconds are:" + getSeconds);
    if (getSeconds === "40") {
      getSeconds = moment().format("ss");
      var getHours = moment().format("hh");
      var aP = moment().format("a");
      alert("HOurs are:" + getHours);
      aP = "am";
      getHours = 9;
      if (aP === "am" && getHours === 9) {
        $(".table-secondary")
          .eq(0)
          .addClass("table-success");

        alert("ouchhhhh it's after hours.");
        for (var i = 1; i < 8; i++) {
          $(".table-secondary")
            .eq(i)
            .addClass("table-danger");
        }
      }
      if (getHours === "11") {
        alert("It's 11PM mate.");
        $(".table-secondary")
          .eq(0)
          .addClass("table-danger");
      }
    }
  }
});
