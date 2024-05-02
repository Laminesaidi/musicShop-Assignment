AOS.init();
fetch("instrumentsMusiques.json")

  
  .then(rep => {
    
    return rep.json();
  })

  .then(donnees => {
   
    addinstrument(donnees.entreprise.produits);
    addservice (donnees.entreprise.services);
    addtemoignages(donnees.entreprise.temoignages);
    aficheHero(donnees.entreprise.nomCommercial,donnees.entreprise.phraseAccroche,donnees.entreprise.texteAppelAction)
  });


function aficheHero(nomCom,acroche,appelAction){
  document.querySelector("#hero").innerHTML  +=
  `
  <div class="absolut">
    <h1>${nomCom}</h1>
    <p>${acroche}</p>
    <div class="act"><a class="action" href="#content">${appelAction}<a></div>
  </div>`
  }
  

  
  function addinstrument(tableauInstruments) {
    // role : ajouter des instruments
    // parametre:le tableau d'instrument (de produits)
   // console.log(produit);
  
   tableauInstruments.forEach(instrument=> {
      
   
      document.querySelector("#content").innerHTML  +=
      `<div data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000" class="card ">
          <img class="avatar" src="${instrument.image}" alt="">
          <h3>${instrument.nom}</h3>
          <p class="size">${instrument.description}</p>
          <div class="flex align-center between ">
          <p class="price">${instrument.prix}</p>
          <div class="ach" ><a class="achat " href="">Acheter</a></div>
          </div>
        </div>`
  
    });

      
  };
  
    // role : ajouter des services
    // parametre : tableau des  services

    function addservice(tableauServices) {
      tableauServices.forEach(service => {

        document.querySelector("#services").innerHTML += 
        `
        <div data-aos="flip-up" class="carteService">
        <h3> ${service.nom} </h3>
        <p > ${service.description}  </p>
        <div class="ach" ><a class="presta" href="">${service.prestation} </a></div>
        </div>
        
        `
      });
    }

    function addtemoignages(tableautemoignages){
        tableautemoignages.forEach(temoignage=>{
          document.querySelector("#temoignage").innerHTML += `
          <div data-aos="flip-up" class="carteTem">
        <p class="gras"> ${temoignage.prenom}  </p>
        <p class="typex"> ${temoignage.typeExperience}  </p>
        <p class="comm"> ${temoignage.commentaire}  </p>
        <p class="nota">Note : ${temoignage.note} </p>
        </div>
         `
        }) 
    }
      
      var map = L.map('map').setView([45.4314190972094, 4.40174009945124], 13);

var Stadia_AlidadeSatellite = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
})
.addTo(map);

L.marker([45.4314190972094, 4.40174009945124]).addTo(map)
    .bindPopup("MusicHalle - Instruments du Monde, 42009 Saint-Étienne")
    .openPopup();
    

      
    