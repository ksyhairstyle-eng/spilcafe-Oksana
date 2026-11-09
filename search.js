// Find elementerne fra HTML
const sogFelt = document.getElementById("sog-felt");
const sogKnap = document.getElementById("sog-knap");

sogKnap.addEventListener("click", ()=>{filtrerSpil()})

// Gør det muligt at søge ved at trykke Enter
sogFelt.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sogKnap.click();
    }
});