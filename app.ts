const button = document.getElementById("show") as HTMLButtonElement;
button.addEventListener("click", getResults);

function getResults() {
    // clearar results så ny fakta och bild kan komma in
    const resultsSection = document.getElementById("results") as HTMLElement;
    resultsSection.innerHTML = "";
    // fetchar data från första api
    fetch('https://api.kanye.rest')
        .then((response) => response.json()) // använder then som tar response från fetchen och ändrar det till ett object eftersom det blir en .json. Det gör så att man får ett promise. Sparar rå data och gör det tillgängligt.
        .then((data) => {
            console.log(data);
            // skapar p tagg för random fakta
            const kanyeQuotes = document.createElement("p");
            kanyeQuotes.innerText = data.quote;
            // appendar random faktan till results
            resultsSection.appendChild(kanyeQuotes);
            // fetchar data från andra API
            return fetch('https://picsum.photos/200');
        })
        .then((response) => response.url)
        .then((data) => {
            console.log(data);
            // skapar img element för lägga till random bild
            const img = document.createElement("img");
            img.src = data;
            // appendar bilden till results
            resultsSection.appendChild(img);
        })
        .catch((error) => {
            console.log(error);
        });
}
