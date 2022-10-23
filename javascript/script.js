function showTimes() {
  let newYorkCityElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkCityElement.querySelector(".date");
  let newYorkTimeElement = newYorkCityElement.querySelector(".time");

  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");

  let parisCityElement = document.querySelector("#paris");
  let parisDateElement = parisCityElement.querySelector(".date");
  let parisTimeElement = parisCityElement.querySelector(".time");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");

  let tokyoCityElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoCityElement.querySelector(".date");
  let tokyoTimeElement = tokyoCityElement.querySelector(".time");
  tokyoTimeElement.innerHTML = moment
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>] A [</small>]");
  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("MMMM Do, YYYY");
}

showTimes();
setInterval(showTimes, 1000);

function displayCity(event) {
  let citySelection = event.target.value;
  if (citySelection === "current") {
    citySelection = moment.tz.guess();
  }
  let cityDisplay = citySelection.split("/")[1].replace("_", " ");
  let timeDisplay = document.querySelector("#cities");
  timeDisplay.innerHTML = `<div id="cities">
        <div class="city">
          <div>
            <h2>${cityDisplay}</h2>
            <div class="date">${moment()
              .tz(citySelection)
              .format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${moment()
            .tz(citySelection)
            .format("h:mm:ss [<small>] A[<small>]")}</div>
        </div>

      </div> 
      <a href="/">All cities</a>`;
}

let chosenCity = document.querySelector("select");
chosenCity.addEventListener("change", displayCity);
