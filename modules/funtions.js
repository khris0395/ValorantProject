export function crearCardDetails(arrayAgents) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  arrayAgents.find(agent => {
    if (agent.uuid == id) {
      let card = document.createElement("div");
      card.classList.add("card", "mb-3", "d-flex", "justify-content-center", "position-relative", );
      card.style.width = "100%";
      card.style.height = "70vh";
      card.innerHTML = `
        <div class="row g-0 h-100">
          <div class="col-md-4 border-3d d-flex">
            <img src="${agent.bustPortrait}" class="align-self-center object" style="width: 100%;" alt="...">
          </div>
          <div class="col-md-8 align-self-center border-3d h-100" style="background-color: rgba(0, 0, 0, 0.7); color: white;">
            <div class="card-body w-100 text-center">
              <h5 class="card-title" style="color: white;">${agent.displayName}</h5>
              <p class="card-text" style="color: white;">${agent.description}</p>
              <div class="d-flex justify-content-around">
                <p class="card-text"><small class="text-body-secondary" style="color: white;">Role: ${agent.role.displayName}</small></p>
                <p class="card-text"><small class="text-body-secondary" style="color: white;">Developer: ${agent.developerName}</small></p>
              </div>
              <p class="card-text"><small class="text-body-secondary" style="color: white; font-size: 1.5rem;">Abilities:</small></p>
              </div>
            <div class="d-flex w-100 justify-content-around">
              <div class="abilities d-flex flex-column">
              <p class="align-self-center text-center" style="font-size: 0.9rem; width: 10vw;">${agent.abilities[0].slot}</p>
              <img src="${agent.abilities[0].displayIcon}" style="width: 100%;" class="align-self-center" alt="...">
              <p class="align-self-center text-center" style="font-size: 0.9rem; width: 10vw;">${agent.abilities[0].displayName}</p>
              </div>
              <div class="abilities d-flex flex-column">
              <p class="align-self-center text-center" style="font-size: 0.9rem; width: 10vw;">${agent.abilities[1].slot}</p>
              <img src="${agent.abilities[1].displayIcon}" style="width: 100%;" class="align-self-center" alt="...">
              <p class="align-self-center text-center" style="font-size: 0.9rem; width: 10vw;">${agent.abilities[1].displayName}</p>
              </div>             
              <div class="abilities d-flex flex-column">
              <p class="align-self-center text-center" style="font-size: 0.9rem; width: 10vw;">${agent.abilities[2].slot}</p>
              <img src="${agent.abilities[2].displayIcon}" style="width: 100%;" class="align-self-center" alt="...">
              <p class="align-self-center text-center" style="font-size: 0.9rem; width: 10vw;">${agent.abilities[2].displayName}</p>
              </div>         
              <div class="abilities d-flex flex-column">
              <p class="align-self-center text-center" style="font-size: 0.9rem; width: 10vw;">${agent.abilities[3].slot}</p>
              <img src="${agent.abilities[3].displayIcon}" style="width: 100%;" class="align-self-center" alt="...">
              <p class="align-self-center text-center" style="font-size: 0.9rem; width: 10vw;">${agent.abilities[3].displayName}</p>
              </div>              
            </div>
          </div>
        </div>
        `
        details.appendChild(card);
      }
    }
    )
  }
