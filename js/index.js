const Btn = document.getElementById("Btn");

const showWeather = async () => {
  try {
    const Input = document.getElementById("Input");
    const errMsg = document.getElementById("errMsg");
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const weatherIcon = document.querySelector(".weather-icon");
    const descr = document.getElementById("descr");
    const humi = document.getElementById("humi");
    const wind = document.getElementById("wind");

    errMsg.textContent = "";

    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        Input.value +
        "&appid=e09d5300d4829c84803a3143a13eeeab&units=metric"
    );
    const data = await res.json();
    console.log(data);

    // for getting icon and description for our weather app
    let getIcon = data.weather[0].icon;
    let descrip = data.weather[0].description;

    city.textContent = data.name;
    temp.textContent = data.main.temp + " °C";
    weatherIcon.src = "http://openweathermap.org/img/wn/" + getIcon + "@2x.png";
    descr.textContent = descrip;
    humi.textContent = `Humidity:  ${data.main.humidity}%`;
    wind.textContent = `Wind speed:  ${data.wind.speed} km/h`;
  } catch (err) {
    errMsg.textContent = `Pls.enter valid city 🌞`;
  }
};

Btn.addEventListener("click", showWeather);
