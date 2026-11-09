//giver slideren funktion//
const spilletidSlider = document.querySelector("#spilletid");
const spilletidValue = document.querySelector("#spilletid-value");


// Find elementerne i HTML.
const kategoriCheckbokse = document.querySelectorAll(
    '#kategori-filter input[name="kategori"]'
);

const svaerhedsgradKnapper = document.querySelectorAll(
    '#svaerhedsgrad-filter input[name="rating"]'
);

const tidCheckbokse = document.querySelectorAll(
    'input[name="tid"]'
);

const minSpillereFelt = document.getElementById("min-spillere");
const maxSpillereFelt = document.getElementById("max-spillere");
const visSpilKnap = document.getElementById("apply-filters");

function filtrerSpil() {
    // Find de valgte kategorier.
const sogeord =document.getElementById("sog-felt").value.toLowerCase().trim();
    const valgteKategorier = Array.from(kategoriCheckbokse)
        .filter(checkboks => checkboks.checked)
        .map(checkboks => checkboks.value);

    // Find den valgte sværhedsgrad.
    const valgtNiveau = document.querySelector(
        '#svaerhedsgrad-filter input[name="rating"]:checked'
    )?.value || "";

    // Find de valgte tider og omdan dem til tal.
    const valgteTider = Array.from(tidCheckbokse)
        .filter(checkboks => checkboks.checked)
        .map(checkboks => Number(checkboks.value));

    // Tomme felter giver NaN og begrænser ikke filtreringen.
    const minSpillere = minSpillereFelt.valueAsNumber;
    const maxSpillere = maxSpillereFelt.valueAsNumber;

    // Antal spillere skal være positive heltal eller tomme felter.
    const gyldigtMin =
        Number.isNaN(minSpillere) ||
        (Number.isInteger(minSpillere) && minSpillere >= 1);

    const gyldigtMax =
        Number.isNaN(maxSpillere) ||
        (Number.isInteger(maxSpillere) && maxSpillere >= 1);

    const gyldigtInterval =
        Number.isNaN(minSpillere) ||
        Number.isNaN(maxSpillere) ||
        minSpillere <= maxSpillere;

    if (!gyldigtMin || !gyldigtMax || !gyldigtInterval) {
        document.getElementById("spil-liste").textContent =
            "Angiv hele tal fra 1. Minimum må ikke være større end maksimum.";
        return;
    }

    // Filtrer grundmængden: alle spil.
    const filtreredeSpil = games.filter(game => {
        //henter den valgte spilletid fra slideren//
        const valgtTid = Number(spilletidSlider.value);
        // Ingen kategorier valgt = alle kategorier.
        const passerKategori =
            valgteKategorier.length === 0 ||
            valgteKategorier.includes(game.category);

    const passerSogning=
    game.title.toLowerCase().includes(sogeord)||
    game.category.toLowerCase().includes(sogeord);

        // Alle valgt = ingen begrænsning på sværhedsgrad.
        const passerNiveau =
            valgtNiveau === "" ||
            game.difficulty === valgtNiveau;

        // Mindst én valgt tid skal ligge i spillets tidsinterval.
        const passerTid =
            valgteTider.length === 0 ||
            valgteTider.some(tid =>
                tid >= game.minTime &&
                tid <= game.maxTime
            );

        // Spillet skal understøtte et antal spillere
        // inden for det valgte interval.
        const passerMin =
            Number.isNaN(minSpillere) ||
            game.maxPlayers >= minSpillere;

        const passerMax =
            Number.isNaN(maxSpillere) ||
            game.minPlayers <= maxSpillere;

        // Alle filtergrupper skal passe samtidig.
        return passerKategori &&
                passerSogning &&
               passerNiveau &&
               passerTid &&
               passerMin &&
               passerMax &&
               game.maxTime<=valgtTid;
    });

    // Vis resultatet med funktionen fra script.js.
    const valgtSortering = document.getElementById("sortering").value;

    if(valgtSortering === "titel") {
        filtreredeSpil.sort((a,b)=>a.title.localeCompare(b.title));
    } else if(valgtSortering==="spilletid") {
        filtreredeSpil.sort((a,b)=>a.maxTime-b.maxTime);
    }

    visSpil(filtreredeSpil);

    if (filtreredeSpil.length === 0) {
        document.getElementById("spil-liste").textContent =
            "Ingen spil matcher dine filtre.";
    }
}

// Opdater, når en kategori ændres.
kategoriCheckbokse.forEach(checkboks => {
    checkboks.addEventListener("change", filtrerSpil);
});

// Opdater, når sværhedsgraden ændres.
svaerhedsgradKnapper.forEach(knap => {
    knap.addEventListener("change", filtrerSpil);
});

// Opdater, når en tid ændres.
tidCheckbokse.forEach(checkboks => {
    checkboks.addEventListener("change", filtrerSpil);
});

// Opdater, når antal spillere ændres.
minSpillereFelt.addEventListener("input", filtrerSpil);
maxSpillereFelt.addEventListener("input", filtrerSpil);

// Anvend også filtrene med knappen "Vis spil".
visSpilKnap.addEventListener("click",()=>{
    kategoriCheckbokse.forEach(boks => boks.checked =false);
    document.querySelector('input[name="rating"][value=""]').checked=true;
    spilletidSlider.value=90;
    spilletidValue.textContent="90 min";
    minSpillereFelt.value="";
    maxSpillereFelt.value="";
    filtrerSpil();
});

//opdaterer spilletiden når slideren flyttes//
spilletidSlider.addEventListener("input", function() {
    const valgtTid = Number(spilletidSlider.value);
    spilletidValue.textContent = valgtTid + " min";
    filtrerSpil();
});
// Første visning.
filtrerSpil();

const filterMenu = document.querySelector(".filterMenu");

function lukFilter() {
  filterMenu.classList.add("lukker");
  filterMenu.addEventListener("animationend", () => {
    filterMenu.open = false;
    filterMenu.classList.remove("lukker");
  }, { once: true });
}

document.addEventListener("click", (event) => {
  if (filterMenu.open && !filterMenu.contains(event.target)) {
    lukFilter();
  }
});