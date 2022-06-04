import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img src="https://user-images.githubusercontent.com/84882231/171746701-a249c493-5357-44f0-993a-b5df51067862.png" alt="" className="logo" />
        <ul className="nav-list">
          <li className="item-nav"><a className="nav-link" href="#sobre-mim">Sobre Mim</a></li>
          <li className="item-nav"><a className="nav-link" href="#projetos">Projetos</a></li>
          <li className="item-nav"><a className="nav-link" href="#skills">Tecnologias</a></li>
          <li className="item-nav"><a className="nav-link" href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
