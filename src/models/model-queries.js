import api from './model-data-api';
import Views from './model-views';

export default class Query {
  constructor(urlRequest, urlPage, view) {
   this.urlRequest = `${api.pathApi}${urlRequest}?api_key=${api.key}&language=pt-BR&page=1`;
   this.urlPage = urlPage;
   this.view = view;
  }

  execute() {
    return fetch(this.urlRequest)
      .then(resp => resp.json())
      .then(json => json)
  }
  
  modelRender(params) {
    let views = new Views();
    views.fillTemplate(params)
  }

  returnData() {
    this.execute()
      .then(response => {
        this.modelRender(
          {
            urlPage: this.urlPage, 
            view: this.view, 
            response: response
          }
        );
      })
      .catch(err => console.error(err));
  }
}