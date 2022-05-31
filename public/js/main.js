// const async = require("hbs/lib/async");
const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
      city_name.innerText = `plz write the city name before search`;
      datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a700b1bf0183fa94ed451e72f615c37d`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      
        const tempMood = arrData[0].weather[0].main;
        console.log(tempMood);

      
      if ((tempMood = "clear")) {
        temp_status.innerText = '<i class="fa-solid fa-sun"></i>';
      } else if ((tempMood = "clouds")) {
        temp_status.innerText =
          "<i class=`fa-solid fa-cloud` style = `color: #f1f2f6;`></i>";
      } else if ((tempMood = "rain")) {
        temp_status.innerText =
          "<i class=`fa-solid fa-cloud-rain` style = `color: #a4b0be;`></i>";
      } else {
        temp_status.innerText =
          "<i class=`fa-solid fa-sun` style = `color: #eccc68`;></i>";
        }
        datahide.classList.remove("data_hide");
    } catch {
        // city_name.innerText = `Enter Correct City Name`;
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        datahide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
