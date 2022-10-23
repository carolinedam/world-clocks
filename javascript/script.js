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

      </div>`;
}

let chosenCity = document.querySelector("select");
chosenCity.addEventListener("change", displayCity);
