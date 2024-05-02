AOS.init();
fetch("instrumentsMusiques.json")

  
  .then(rep => {
    
    return rep.json();
  })

  .then(donnees => {
   
    addinstrument(donnees.entreprise.produits);
    addservice (donnees.entreprise.services);
    addtemoignages(donnees.entreprise.temoignages);

  });

  
  
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
          <div class="carteTem">
        <p class="gras"> ${temoignage.prenom}  </p>
        <p class="typex"> ${temoignage.typeExperience}  </p>
        <p class="comm"> ${temoignage.commentaire}  </p>
        <p class="nota">Note : ${temoignage.note} </p>
        </div>
         `
        }) 
      }

      
    