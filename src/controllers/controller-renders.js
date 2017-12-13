import Query from '../models/model-queries';

export default class Renders {
  setQuery(urlRequest, urlPage, view) {
    let query = new Query(urlRequest, urlPage, view);
    query.returnData();
  }

  index() {
    this.setQuery("popular", "/", "index");
  }

  categories() {
    this.setQuery("genre", "/categorias", "categories");
  }

  events() {
  // utilizar a interação do usuario para fazer a aplicação reagir. 
  }
  
  init() {
    this.index();
  }
}

let app = new Renders();
app.init();