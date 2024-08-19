import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [cityName, setcityName] = useState("");
  let [allCity, setallCity] = useState([]);
  let [weatherData, setweatherData] = useState([]);
  let handleForm = (e) => {
    let oldWeatherData = [...weatherData];
    e.preventDefault();
    if (!allCity.includes(cityName)) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`
        )
        .then((res) => {
          // console.log(res.data);
          let { main, sys, weather, wind, name } = res.data;
          let dataObj = {
            main,
            sys,
            weather,
            wind,
            name,
          };
          oldWeatherData.push(dataObj);
          setallCity([...allCity, cityName]);
          setweatherData(oldWeatherData);
        })
        .catch((error) => {
          toast.error("City Not Found.");
        });
    } else {
      toast.error("Searched City already exists.");
    }
  };

  useEffect(() => {
    // console.log(weatherData);
  }, [weatherData]);
  return (
    <>
      <section className="w-full min-h-screen bg-[#456dad]">
        <ToastContainer />

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-center pt-10 text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Simple Weather App
        </h1>

        <form className="max-w-2xl mx-auto mt-12" onSubmit={handleForm}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={cityName}
              onChange={(e) => setcityName(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search Weather by City name"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 0"
            >
              Search
            </button>
          </div>
        </form>

        <div className="max-w-[1170px] mx-auto mt-16">
          <div className="grid grid-cols-3 gap-6 pb-10">
            {weatherData.length >= 1 ? (
              weatherData.map((items,index) => (
                <div key={index} className="bg-[#222831] text-white p-5 shadow-lg">
                  <h2 className="text-[30px] flex justify-between">
                    {items.name}{" "}
                    <span className="bg-teal-400 font-bold p-1 px-2">
                      {items.sys.country}
                    </span>{" "}
                  </h2>
                  <div className="text-[40px] font-semibold my-3">
                    {items.main.temp}
                  </div>
                  <div className="text-[28px] font-medium my-2">
                    Feels Like : {items.main.feels_like}
                  </div>
                  <img
                    className="my-3"
                    src={`https://openweathermap.org/img/w/${items.weather[0].icon}.png`}
                    alt="logo"
                  />
                  <p className="capitalize my-3 text-[18px] font-semibold">
                    {items.weather[0].description}
                  </p>
                </div>
              ))
            ) : (
              <h3 className="text-white text-[32px] font-semibold text-center fixed left-[50%] top-[50%] translate-x-[-50%]">
                "Search Weather by City Name..."
              </h3>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;


// ! API Link

// `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`

// wheatherIconLink = `https://openweathermap.org/img/w/`
