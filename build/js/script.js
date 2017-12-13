(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _controllerRenders = require('./controllers/controller-renders');

var _controllerRenders2 = _interopRequireDefault(_controllerRenders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./controllers/controller-renders":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelQueries = require("../models/model-queries");

var _modelQueries2 = _interopRequireDefault(_modelQueries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renders = function () {
  function Renders() {
    _classCallCheck(this, Renders);
  }

  _createClass(Renders, [{
    key: "setQuery",
    value: function setQuery(urlRequest, urlPage, view) {
      var query = new _modelQueries2.default(urlRequest, urlPage, view);
      query.returnData();
    }
  }, {
    key: "index",
    value: function index() {
      this.setQuery("popular", "/", "index");
    }
  }, {
    key: "categories",
    value: function categories() {
      this.setQuery("genre", "/categorias", "categories");
    }

    // events() {
    //   this.categories()
    // }

  }, {
    key: "init",
    value: function init() {
      this.index();
    }
  }]);

  return Renders;
}();

exports.default = Renders;


var app = new Renders();
app.init();

},{"../models/model-queries":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var api = {
  key: 'fc02735f261b83f02fbc2d37d9019265',
  pathApi: 'https://api.themoviedb.org/3/movie/',
  pathStatic: 'https://image.tmdb.org/t/p/w185'
};

exports.default = api;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelDataApi = require('./model-data-api');

var _modelDataApi2 = _interopRequireDefault(_modelDataApi);

var _modelViews = require('./model-views');

var _modelViews2 = _interopRequireDefault(_modelViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Query = function () {
  function Query(urlRequest, urlPage, view) {
    _classCallCheck(this, Query);

    this.urlRequest = '' + _modelDataApi2.default.pathApi + urlRequest + '?api_key=' + _modelDataApi2.default.key + '&language=pt-BR&page=1';
    this.urlPage = urlPage;
    this.view = view;
  }

  _createClass(Query, [{
    key: 'execute',
    value: function execute() {
      return fetch(this.urlRequest).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return json;
      });
    }
  }, {
    key: 'modelRender',
    value: function modelRender(params) {
      var views = new _modelViews2.default();
      views.fillTemplate(params);
    }
  }, {
    key: 'returnData',
    value: function returnData() {
      var _this = this;

      this.execute().then(function (response) {
        _this.modelRender({
          urlPage: _this.urlPage,
          view: _this.view,
          response: response
        });
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }]);

  return Query;
}();

exports.default = Query;

},{"./model-data-api":3,"./model-views":6}],5:[function(require,module,exports){
"use strict";

var templates = [{
  name: "list",
  body: "\n    <dl class=\"list-films\">\n    <dd class=\"list-films__film\">\n      <figure class=\"list-films__poster\">\n        <img src=\"\" alt=\"\">\n      </figure>\n\n      <article class=\"list-films__infos\">\n        <header>\n          <div class=\"expand\">\n            <h2 class=\"list-films__title\">Nome do filme</h2>\n            <span class=\"list-films__note\">7.1</span>\n          </div>\n          <div class=\"expand\">\n            <span class=\"list-films__year\">2007</span>\n            <ul class=\"list-films__categories\">\n              <li>A\xE7\xE3o</li>\n              <li>Aventura</li>\n              <li>Fic\xE7\xE3o</li>\n            </ul>\n          </div>\n        </header>\n        <p>\n          Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida como neurocirurgi\xE3o. Sua vida muda completamente quando sofre um acidente de carro e fica com as\u2026\n        </p>\n        <footer>\n          <a href=\"#\">Mais informa\xE7\xF5es</a>\n        </footer>\n      </article>\n    </dd>\n  </dl>\n    "
}, {
  name: "film",
  body: "\n      <h1></h1>\n    "
}];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelTemplatesViews = require('./model-templates-views');

var _modelTemplatesViews2 = _interopRequireDefault(_modelTemplatesViews);

var _modelDataApi = require('./model-data-api');

var _modelDataApi2 = _interopRequireDefault(_modelDataApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Views = function () {
  function Views() {
    _classCallCheck(this, Views);

    this.context = document.querySelector(".app");
  }

  _createClass(Views, [{
    key: 'fillTemplate',
    value: function fillTemplate(arg) {
      var films = arg.response.results;

      if (arg.view === "index") {
        var html = "";
        console.log(films);
        films.forEach(function (element) {
          html += '\n        <dd class="list-films__film">\n        <figure class="list-films__poster">\n          <img src="' + _modelDataApi2.default.pathStatic + element.poster_path + '" alt="' + element.title + '">\n        </figure>\n\n        <article class="list-films__infos">\n          <header>\n            <div class="expand">\n              <h2 class="list-films__title">Nome do filme</h2>\n              <span class="list-films__note">' + element.vote_average + '</span>\n            </div>\n            <div class="expand">\n              <span class="list-films__year">2007</span>\n              <ul class="list-films__categories">\n                <li>A\xE7\xE3o</li>\n                <li>Aventura</li>\n                <li>Fic\xE7\xE3o</li>\n              </ul>\n            </div>\n          </header>\n          <p>\n            ' + element.overview + '\n          </p>\n          <footer>\n            <a href="' + _modelDataApi2.default.pathApi + element.id + '?api_key=' + _modelDataApi2.default.key + '&language=pt-BR}" title="' + element.title + '">Mais informa\xE7\xF5es</a>\n          </footer>\n        </article>\n      </dd>\n        ';
        });
        this.context.innerHTML = '<dl class="list-films">' + html + '</dl>';
      }
    }
  }]);

  return Views;
}();

exports.default = Views;

},{"./model-data-api":3,"./model-templates-views":5}]},{},[1]);
