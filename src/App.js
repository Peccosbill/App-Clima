import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./App.module.css";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Cards from "./components/Cards.jsx";
import City from "./components/City.jsx";
import Error404 from "./components/Error404.jsx";

const apiKey = "7600e3c0488090ddc219f6772ad9f223";

export default function App() {
  const [cities, setCities] = useState([]);
  const MySwal = withReactContent(Swal);

  //=========================================
  // TRAER LA CARD CON LOS DATOS DEL CLIMA DE NUESTRA UBICACIÓN
  useEffect(() => {
    // >>>>>>>> LE PEDIMOS PERMISO AL USUARIO PARA ACCEDER A SU UBICACIÓN GEOGRAFICA <<<<<<<<<<<<<<<
    if (navigator.geolocation) {
      //SI ACEPTA, OBTENEMOS SUS COORDENADAS
      const success = function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        function weatherLocation() {
          //LLAMAMOS A LA API PIDIENDOLE LA CIUDAD CON ESAS COORDENADAS Y EXTRAEMOS SUS DATOS PARA LA "CARD"
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
          )
            .then((r) => r.json())
            .then((recurso) => {
              if (recurso.main !== undefined) {
                const city = {
                  id: recurso.id,
                  img: recurso.weather[0].icon,
                  weather: recurso.weather[0].main,
                  description: recurso.weather[0].description,
                  min: Math.round(recurso.main.temp_min),
                  max: Math.round(recurso.main.temp_max),
                  temp: recurso.main.temp,
                  feels_like: recurso.main.feels_like,
                  humidity: recurso.main.humidity,
                  wind: recurso.wind.speed,
                  name: recurso.name,
                  country: recurso.sys.country,
                  clouds: recurso.clouds.all,
                  latitud: recurso.coord.lat,
                  longitud: recurso.coord.lon,
                };
                return setCities((oldCities) => [...oldCities, city]); //SI LA CIUDAD EXISTE, ES AGREGADA A NUESTRO ESTADO DE CITIES
              }
            });
        }
        weatherLocation();
      };
      navigator.geolocation.getCurrentPosition(success, function (msg) {
        console.error(msg);
      });
    }
  }, []); //SOLO SE EJECUTARÁ AL RECARGAR LA PÁGINA

  // ========================================

  function onSearch(city) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            id: recurso.id,
            img: recurso.weather[0].icon,
            description: recurso.weather[0].description,
            weather: recurso.weather[0].main,
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            temp: recurso.main.temp,
            feels_like: recurso.main.feels_like,
            humidity: recurso.main.humidity,
            wind: recurso.wind.speed,
            name: recurso.name,
            country: recurso.sys.country,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          if (cities.find((e) => e.id === city.id)) {
            return MySwal.fire({
              title: `Ciudad ${city.name} duplicada`,
              icon: "error",
              confirmButtonText: "OK",
              backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `,
            });   
          } else {
            return setCities((oldCities) => [...oldCities, city]);
          }
        } else {
          return MySwal.fire({
            title: "No se ha encontrado la ciudad",
            icon: "error",
            confirmButtonText: "OK",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `,
          });
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <div className={styles.App}>
      <Route path={"/"} render={() => <Nav onSearch={onSearch} />} />
      <Route exact path={"/about"} component={About} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route
        exact
        path={"/city/:cityId"}
        render={({ match }) => <City city={onFilter(match.params.cityId)} />}
      />
      <Route path="*" component={Error404} />
    </div>
  );
}

