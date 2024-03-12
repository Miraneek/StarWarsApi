async function getStarWarsPlanets(id) {
    const api = "https://swapi.py4e.com/api/planets/" + id + "/";
    const response = await fetch(api);
    if (response.ok) {
        return await response.json();
    }
    return null;
}

async function loadData() {
    event.preventDefault()
    const div = document.querySelector("#root");
    div.innerHTML = `
            <section>
            <div class="loader">
                <div class="upper ball"></div>
                <div class="right ball"></div>
                <div class="lower ball"></div>
                <div class="left ball"></div>
            </div>
        </section>
    `
    const id = document.querySelector("#input").value;
    const data = await getStarWarsPlanets(id);
    if (data) {
        div.innerHTML = `
            <div class="card">
                <h2>${data.name}</h2>
                <p>Rotation Period: ${data.rotation_period}</p>
                <p>Orbital Period: ${data.orbital_period}</p>
                <p>Diameter: ${data.diameter}</p>
                <p>Climate: ${data.climate}</p>
            </div>`;
    } else {
        console.error("Failed to fetch Star Wars planets data.");
    }
}

document.querySelector("#submit").addEventListener("click", loadData);
