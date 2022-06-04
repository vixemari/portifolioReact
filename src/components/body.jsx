import React from 'react';
import Projetos from './meusProjetos';
import Form from './form';
import Skills from './skills';
import Contatos from './contatos';

function Body() {
  return (
    <main>
      <section className="s-home">
        <article className="article-home">
          <span className="span-home">Olá, Tudo bem? Meu nome é</span>
          <h1> Mariana Rocha </h1>
          <p>Desenvolvedora Web FullStack Jr</p>
          <div className="botoes-home">
            <a href="https://api.whatsapp.com/send?phone=5579999393328"><button type="button" className="link-contato">Fale Comigo</button></a>
          </div>
        </article>
        <img src="https://user-images.githubusercontent.com/84882231/171739050-34aa3966-58a1-4f2a-af7a-4ba77ba15d42.png" alt="" width="500px" height="500px" className="img-home" />
      </section>

      <h2 id="sobre-mim" className="titulo-sobre">Sobre Mim</h2>
      <section className="sobre">
        <img src="https://user-images.githubusercontent.com/84882231/171765584-58b0ea8b-99b3-4a30-ae8c-72a1fb156437.png" alt="" width="500px" height="500px" />
        <article className="article-sobre">
          <p>
            Meu nome é Mariana Rocha, tenho 27 anos Arquiteta e Urbanista
            passando por um processo de transição de carreira
            com estudos em Desenvolvimento Web Full Stack na Trybe uma
            escola focada em ensino na prática.
            O desenvolvimento de software sempre foi algo no meu radar
            e tomei a decisão de encarar esse desafio. Quero ajudar
            a desenvolver aplicações que façam sentido e melhorem a vida das pessoas.
            Tenho conhecimento intermediário em JavaScript, React, HTML, CSS,
            testes unitários, Git/GitHub, Redux, Context API, Hooks,
            Docker, SQL, Node.js. Estou aberta para aprender outras
            linguagens e frameworks.
          </p>
        </article>
      </section>

      <section id="projetos">
        <h2 className="titulo-projetos">Meus Projetos</h2>
        <Projetos />
      </section>
      <section id="skills">
        <h2 className="titulo-projetos">Tecnologias</h2>
        <Skills />
      </section>
      <section id="contato">
        <article className="contato">
          <Contatos />
          <Form />
        </article>
      </section>
    </main>

  );
}
export default Body;
