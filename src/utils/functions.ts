import { ListIndex } from "./constants";

export const getIcon = (data: string): string => `https://openweathermap.org/img/wn/${data}@2x.png`;

export const formateToUpperCase = (data: string): string => `${data.slice(0, 1).toUpperCase()}${data.slice(1)}`;

export const formatePressure = (data: number): string => `${Math.round(data * 0.75006375541921)} мм рт.ст.`;

export const formateVisibility = (data: number): string => `${data / 1000} км.`;

export const formateLocalTime = (data: number): string => `${data < 10 ? "0" + data : data}`;

export const formateDayWeek = (dayArr: string[], monthArr: string[]): string => {
    const date = new Date()
    const day = dayArr[date.getDay()];
    const dayMonth = date.getDate()
    const month = monthArr[date.getMonth()];
    const year = date.getFullYear()
    return `${day}, ${dayMonth} ${month} ${year}`; 
}

export const greeting = (data: number): string => {
    if (4 < data && data <= 11) {
        return "Доброе утро"
    } else if (12 < data && data <= 16 ) {
        return "Добрый день"
    } else if (17 < data && data <= 23 ) {
        return "Добрый вечер"
    } 
    return "Доброй ночи"
};

export function getDescriptionCAQI(index: number) {
    switch (index) {
      case 1:
        return ListIndex.VeryLow;
      case 2:
        return ListIndex.Low;
      case 3:
        return ListIndex.Medium;
      case 4:
        return ListIndex.High;
      case 5:
        return ListIndex.VeryHigh;
    } 
    return "Нет данных"
  }
  
export function getUviDescription(index: number) {
  if (index < 3) {
    return "Низкий";
  } else if (index >= 3 && index < 6) {
    return "Умеренный";
  } else if (index >= 6 && index <= 8) {
    return "Высокий";
  } else if (index >= 8 && index <= 11) {
    return "Очень высокий";
  }
  return "Чрезмерный";
}
