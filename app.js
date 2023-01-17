var button = document.getElementById("show");
button.addEventListener("click", getResults);
function getResults() {
    // clearar results så ny fakta och bild kan komma in
    var resultsSection = document.getElementById("results");
    resultsSection.innerHTML = "";
    // fetchar data från första api
    fetch('https://api.kanye.rest')
        .then(function (response) { return response.json(); }) // använder then som tar response från fetchen och ändrar det till ett object eftersom det blir en .json. Det gör så att man får ett promise. Sparar rå data och gör det tillgängligt.
        .then(function (data) {
        console.log(data);
        // skapar p tagg för random fakta
        var kanyeQuotes = document.createElement("p");
        kanyeQuotes.innerText = data.quote;
        // appendar random faktan till results
        resultsSection.appendChild(kanyeQuotes);
        // fetchar data från andra API
        return fetch('https://picsum.photos/200');
    })
        .then(function (response) { return response.url; })
        .then(function (data) {
        console.log(data);
        // skapar img element för lägga till random bild
        var img = document.createElement("img");
        img.src = data;
        // appendar bilden till results
        resultsSection.appendChild(img);
    })["catch"](function (error) {
        console.log(error);
    });
}
