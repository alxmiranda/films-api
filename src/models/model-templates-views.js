const templates = [
  {
    name: "list",
    body: `
    <dl class="list-films">
    <dd class="list-films__film">
      <figure class="list-films__poster">
        <img src="" alt="">
      </figure>

      <article class="list-films__infos">
        <header>
          <div class="expand">
            <h2 class="list-films__title">Nome do filme</h2>
            <span class="list-films__note">7.1</span>
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
          Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida como neurocirurgião. Sua vida muda completamente quando sofre um acidente de carro e fica com as…
        </p>
        <footer>
          <a href="#">Mais informações</a>
        </footer>
      </article>
    </dd>
  </dl>
    `
  },
  {
    name: "film",
    body:
    `
      <h1></h1>
    `
  }
];