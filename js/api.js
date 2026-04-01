const API_KEY = "5d258467aa95888e45bd7795207a9ec3";

export async function getWeather(lat, lon) {
  const forecast = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
  );

  const daily = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=Delhi&units=metric&appid=${API_KEY}`,
  );

  return {
    forecast: await forecast.json(),
    daily: await daily.json(),
  };
}
