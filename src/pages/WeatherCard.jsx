import React, { useEffect, useState } from "react";
import { FaCloudSun, FaCloudRain, FaSun, FaCloud, FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import "./WeatherCard.css";
import "./Dashboard.css";

const API_KEY = "8172ba1121c4e245acc61c46a6128484"; // Sua key

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Engenheiro%20Coelho,BR&appid=${API_KEY}&units=metric&lang=pt_br`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          setWeather(data);
        } else {
          setError("Não foi possível obter o clima 😔");
        }
      })
      .catch(() => setError("Erro de conexão."));
  }, []);

  // Escolher ícone
  const getIcon = (main) => {
    if (main === "Rain") return <FaCloudRain />;
    if (main === "Clear") return <FaSun />;
    if (main === "Clouds") return <FaCloudSun />;
    if (main === "Snow") return <FaSnowflake />;
    return <FaCloud />;
  };

  return (
    <div className="weather-card-glass">
      <div className="weather-header">
        <FaMapMarkerAlt style={{marginRight: 7}} />
        Engenheiro Coelho
      </div>
      {error && <div className="weather-erro">{error}</div>}
      {!error && !weather && <div className="weather-loading">Carregando...</div>}
      {weather && (
        <>
          <div className="weather-temp">
            {getIcon(weather.weather[0].main)}
            <span>{Math.round(weather.main.temp)}ºC</span>
          </div>
          <div className="weather-desc">
            {weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}
          </div>
          <div className="weather-minmax">
            <span>Mín: {Math.round(weather.main.temp_min)}ºC</span> | <span>Máx: {Math.round(weather.main.temp_max)}ºC</span>
          </div>
        </>
      )}
    </div>
  );
}
