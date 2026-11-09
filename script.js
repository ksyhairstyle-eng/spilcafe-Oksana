const spilListe = document.getElementById("spil-liste");

const kategorier = ["Mord mysterie", "Selskab", "Brug kroppen", "Kortspil", "Gammeldags", "Brain twister"];

function visSpil(liste) {
  spilListe.innerHTML = "";

  kategorier.forEach(kategori => {
    let kort = ""; 

    liste.filter(game => game.category === kategori).forEach(game => {
      let spillere =`${game.minPlayers} - ${game.maxPlayers}`;
      if (game.minPlayers===game.maxPlayers){
        spillere=`${game.minPlayers}`;
      }
      let tid =`${game.minTime} - ${game.maxTime}`;
      if (game.minTime===game.maxTime) {
        let=`${game.minTime}`;
      }

        kort += ` 
        <article class="kort" data-category="${game.category}">
          <img src="${game.image}" alt="${game.title}">
          <h3>${game.title}</h3>
          <p class="tag">${game.category}</p>
          <p>${tid} min</p>
          <p>${spillere} spillere</p>
        </article>
      `;
    });

    if (kort=== "") {return;}
    spilListe.innerHTML += ` 
      <h2>${kategori}</h2>
      <div class="raekke">${kort}</div>
    `;
  });
}

visSpil(games);