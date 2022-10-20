function showTimes() {
  let newYorkCityElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkCityElement.querySelector(".date");
  let newYorkTimeElement = newYorkCityElement.querySelector(".time");

  newYorkDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");

  let parisCityElement = document.querySelector("#paris");
  let parisDateElement = parisCityElement.querySelector(".date");
  let parisTimeElement = parisCityElement.querySelector(".time");

  parisDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");
}

showTimes();
setInterval(showTimes, 1);
