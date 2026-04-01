export function startAnimation(weather) {
  if (weather === "Rain") rain();
  else if (weather === "Snow") snow();
  else if (weather === "Thunderstorm") storm();
  else if (weather === "Clouds") cloudy();
  else clear();
}

function clear() {
  document.body.style.background = "linear-gradient(to top,#4facfe,#00f2fe)";
}

function cloudy() {
  document.body.style.background = "linear-gradient(#757f9a,#d7dde8)";
}

function rain() {
  document.body.style.background = "linear-gradient(#373B44,#4286f4)";
}

function snow() {
  document.body.style.background = "linear-gradient(#e6dada,#274046)";
}

function storm() {
  document.body.style.background = "#0f172a";

  setInterval(() => {
    document.body.style.background = "white";

    setTimeout(() => {
      document.body.style.background = "#0f172a";
    }, 100);
  }, 4000);
}
