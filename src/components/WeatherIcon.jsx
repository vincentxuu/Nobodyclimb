import styled from "@emotion/styled";
import { useMemo } from "react";
import { ReactComponent as DayClear } from "../images/weatherimg/day-clear.svg";
import { ReactComponent as DayCloudy } from "../images/weatherimg/day-cloudy.svg";
import { ReactComponent as DayCloudyFog } from "../images/weatherimg/day-cloudy-fog.svg";
import { ReactComponent as DayFog } from "../images/weatherimg/day-fog.svg";
import { ReactComponent as DayPartiallyClearWithRain } from "../images/weatherimg/day-partially-clear-with-rain.svg";
import { ReactComponent as DaySnowing } from "../images/weatherimg/day-snowing.svg";
import { ReactComponent as DayThunderstorm } from "../images/weatherimg/day-thunderstorm.svg";
import { ReactComponent as NightClear } from "../images/weatherimg/night-clear.svg";
import { ReactComponent as NightCloudy } from "../images/weatherimg/night-cloudy.svg";
import { ReactComponent as NightCloudyFog } from "../images/weatherimg/night-cloudy-fog.svg";
import { ReactComponent as NightFog } from "../images/weatherimg/night-fog.svg";
import { ReactComponent as NightPartiallyClearWithRain } from "../images/weatherimg/night-partially-clear-with-rain.svg";
import { ReactComponent as NightSnowing } from "../images/weatherimg/night-snowing.svg";
import { ReactComponent as NightThunderstorm } from "../images/weatherimg/night-thunderstorm.svg";

const IconContainer = styled.div`
  svg {
    max-height: 35px;
    max-width: 35px;
    margin-right: 8px;
    @media (max-width: 767px) {
      max-height: 25px;
      max-width: 25px;
    }
  }
`;
const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isClear: [1],
  isCloudyFog: [25, 26, 27, 28],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isPartiallyClearWithRain: [
    8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39,
  ],
  isSnowing: [23, 37, 42],
};
const weatherIcons = {
  day: {
    isThunderstorm: <DayThunderstorm />,
    isClear: <DayClear />,
    isCloudyFog: <DayCloudyFog />,
    isCloudy: <DayCloudy />,
    isFog: <DayFog />,
    isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
    isSnowing: <DaySnowing />,
  },
  night: {
    isThunderstorm: <NightThunderstorm />,
    isClear: <NightClear />,
    isCloudyFog: <NightCloudyFog />,
    isCloudy: <NightCloudy />,
    isFog: <NightFog />,
    isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
    isSnowing: <NightSnowing />,
  },
};

const weatherCode2Type = (weatherCode) => {
  const [weatherType] =
    Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
    ) || [];

  return weatherType;
};

const WeatherIcon = ({ weatherCode, moment }) => {
  const weatherType = useMemo(
    () => weatherCode2Type(weatherCode),
    [weatherCode]
  );
  const weatherIcon = weatherIcons[moment][weatherType];

  return <IconContainer>{weatherIcon}</IconContainer>;
};

export default WeatherIcon;
