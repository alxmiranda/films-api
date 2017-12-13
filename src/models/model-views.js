import api from './model-data-api';

export default class Views {
  constructor() {
    this.context = document.querySelector(".app");
  }

  fillTemplate(arg){
    let films = arg.response.results;

    if(arg.view === "index") {
      let html = "";
      console.log(films);
      films.forEach(element => {
        html +=
        `
        <dd class="list-films__film">
        <figure class="list-films__poster">
          <img src="${api.pathStatic}${element.poster_path}" alt="${element.title}">
        </figure>

        <article class="list-films__infos">
          <header>
            <div class="expand">
              <h2 class="list-films__title">Nome do filme</h2>
              <span class="list-films__note">${element.vote_average}</span>
            </div>
            <div class="expand">
              <span class="list-films__year">2007</span>
              <ul class="list-films__categories">
                <li>Ação</li>
                <li>Aventura</li>
                <li>Ficção</li>
              </ul>
            </div>
          </header>
          <p>
            ${element.overview}
          </p>
          <footer>
            <button data-url="${api.pathApi}${element.id}?api_key=${api.key}&language=pt-BR}">Mais informações</button>
          </footer>
        </article>
      </dd>
        `;
      });
      this.context.innerHTML = `<dl class="list-films">${html}</dl>`
    } 
  }
}