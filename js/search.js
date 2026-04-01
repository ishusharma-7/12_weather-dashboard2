const GEO_KEY = "84ebd484e9524137b14daee91201ad42";

export function setupSearch(loadWeather) {
  const input = document.getElementById("searchBox");
  const suggestions = document.getElementById("suggestions");

  input.addEventListener("input", async () => {
    let q = input.value;

    if (q.length < 3) return;

    let res = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${q}&apiKey=${GEO_KEY}`,
    );

    let data = await res.json();

    suggestions.innerHTML = "";

    data.features.forEach((place) => {
      let div = document.createElement("div");

      div.innerText = place.properties.formatted;

      div.onclick = () => {
        loadWeather(place.properties.lat, place.properties.lon);

        suggestions.innerHTML = "";
      };

      suggestions.appendChild(div);
    });
  });
}
