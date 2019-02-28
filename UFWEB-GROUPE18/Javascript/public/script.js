const liste = document.createElement("ul");
const elementListe1 = document.createElement("li");
elementListe1.innerText ="Element 1";
liste.appendChild(elementListe1);

const elementListe2 = document.createElement("li");
elementListe2.innerText="Element 2";
liste.appendChild(elementListe2);
document.body.appendChild(liste);

const personne = {
    "nom": "FDP",
    "Niveau": "56"
};
const exemple = JSON.stringify(personne);
console.log(exemple);

const req = new XMLHttpRequest();

req.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            console.log("Réponse reçue: %s", this.responseText);
            exemple = JSON.parse(req.onreadystatechange);
            console.log(exemple);
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};

req.open('GET','https://api.nasa.gov/planetary/apod?api_key=8EgEhhCVS07LcYR4Em6sOcYbVaoNoO56h9OGDgiq', true);
req.send(null);
