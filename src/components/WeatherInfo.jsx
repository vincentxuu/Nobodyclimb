import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import { ReactComponent as RainIcon } from "../images/weatherimg/rain.svg";
import WeatherIcon from "./WeatherIcon";

const theme = {
  light: {
    backgroundColor: "#1F2022",
    foregroundColor: "#f9f9f9",
    titleColor: "#f9f9f9",
    temperatureColor: "#f9f9f9",
    textColor: "#f9f9f9",
  },
  dark: {
    backgroundColor: "#1F2022",
    foregroundColor: "#121416",
    boxShadow:
      "0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)",
    titleColor: "#f9f9fa",
    temperatureColor: "#dddddd",
    textColor: "#cccccc",
  },
};

const Container = styled.div`
  position: absolute;
  top: 9%;
  @media (max-width: 767px) {
    position: relative;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

const WeatherCard = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Location = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.titleColor};
  margin-right: 8px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    margin-left: 150px;
  }
`;

const Temperature = styled.div`
  color: ${({ theme }) => theme.temperatureColor};
  font-size: 20px;
  display: flex;
  margin-right: 8px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
  svg {
    width: 30px;
    height: auto;
    margin-right: 8px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    svg {
      width: 20px;
      height: auto;
      margin-right: 8px;
    }
  }
`;

const AUTHORIZATION_KEY = "CWB-59276178-F239-405A-9A4E-454323F9E4C4";
const LOCATION_NAME = "臺北";
const LOCATION_NAME_FORECAST = "臺北市";

const WeatherInfo = () => {
  console.log("--- invoke function component ---");
  const [currentTheme, setCurrentTheme] = useState("light");
  const [weatherElement, setWeatherElement] = useState({
    locationName: "",
    description: "",
    windSpeed: 0,
    temperature: 0,
    rainPossibility: 0,
    comfortability: "",
    weatherCode: 0,
    observationTime: new Date(),
    isLoading: true,
  });

  const fetchWeatherElement = () => {
    setWeatherElement((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    fetch(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}
        `
    )
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0];
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (["WDSD", "TEMP"].includes(item.elementName)) {
              return {
                ...neededElements,
                [item.elementName]: item.elementValue,
              };
            }
            return neededElements;
          },
          {}
        );
        setWeatherElement((prevState) => ({
          ...prevState,
          observationTime: locationData.time.obsTime,
          locationName: locationData.locationName,
          temperature: weatherElements.TEMP,
          windSpeed: weatherElements.WDSD,
          isLoading: false,
        }));
      });
  };

  const fetchWeatherForecast = () => {
    fetch(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_FORECAST}
        `
    )
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0];
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (["Wx", "PoP", "CI"].includes(item.elementName)) {
              return {
                ...neededElements,
                [item.elementName]: item.time[0].parameter,
              };
            }
            return neededElements;
          },
          {}
        );
        setWeatherElement((prevState) => ({
          ...prevState,
          description: weatherElements.Wx.parameterName,
          weatherCode: weatherElements.Wx.parameterValue,
          rainPossibility: weatherElements.PoP.parameterName,
          comfortability: weatherElements.CI.parameterName,
        }));
      });
  };
  useEffect(() => {
    console.log("execute function in useEffect");
    fetchWeatherElement();
    fetchWeatherForecast();
  }, []);
  const {
    observationTime,
    locationName,
    description,
    windSpeed,
    temperature,
    rainPossibility,
    isLoading,
    comfortability,
    weatherCode,
  } = weatherElement;
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        {console.log("render, isLoading: ", isLoading)}
        <WeatherCard>
          <CurrentWeather>
            <WeatherIcon weatherCode={weatherCode} moment="day" />
            <Temperature>
              {Math.round(temperature)} <Celsius>°C</Celsius>
            </Temperature>
            <Rain>
              <RainIcon />
              {rainPossibility}%
            </Rain>
          </CurrentWeather>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "100%",
              left: "18%",
              " @media (max-width: 767px)": {
                position: "absolute",
                top: "35%",
                left: "18%",
              },
            }}
          >
            <Location>{locationName}</Location>
            <Description>{description}</Description>
          </Box>
        </WeatherCard>
      </Container>
    </ThemeProvider>
  );
};

export default WeatherInfo;
