import { React } from 'react';
import '../style/style.css';

function Projetos() {
  return (
    <div className="projetos">
      <div className="cards">
        <p className="titulo-card">App de Receitas</p>
        <img src="https://user-images.githubusercontent.com/84882231/171644016-90743c60-68ad-4e5f-9a99-28112bcf713f.png" alt="" width="191" height="311" />
        <div className="projects-btn">
          <a href="https://recipes-app-henna.vercel.app/"><button type="button" className="btn-view">Acesse</button></a>
          <a href="https://github.com/vixemari/recipes-app"><button type="button" className="btn-git">GitHub</button></a>
        </div>
      </div>
      <div className="cards">
        <p className="titulo-card">Trybewallet</p>
        <img src="https://user-images.githubusercontent.com/84882231/171643630-46e73bfc-22bd-4e39-a177-8ae02944b779.png" alt="" width="311px" height="191px" />
        <div className="projects-btn">
          <a href="https://trybewallet-two.vercel.app/"><button type="button" className="btn-view">Acesse</button></a>
          <a href="https://github.com/vixemari/trybewallet"><button type="button" className="btn-git">GitHub</button></a>
        </div>
      </div>
      <div className="cards">
        <p className="titulo-card">Solar System</p>
        <img src="https://user-images.githubusercontent.com/84882231/171643607-3b1c9c55-bbf3-4bd4-8f5a-9c27855020df.png" alt="" width="311px" height="191px" />
        <div className="projects-btn">
          <a href="https://solar-system-theta-tawny.vercel.app/"><button type="button" className="btn-view">Acesse</button></a>
          <a href="https://github.com/vixemari/solar-system"><button type="button" className="btn-git">GitHub</button></a>
        </div>
      </div>

      <div className="cards">
        <p className="titulo-card">Star Wars Planet Search</p>
        <img src="https://user-images.githubusercontent.com/84882231/171643627-ae9c00cd-ea7d-4dc2-819d-bc7dff9dd3ee.png" alt="" width="311px" height="191px" />
        <img src="" alt="" />
        <div className="projects-btn">
          <a href="https://star-wars-planets-two.vercel.app/"><button type="button" className="btn-view">Acesse</button></a>
          <a href="https://github.com/vixemari/StarWars-Planets"><button type="button" className="btn-git">GitHub</button></a>
        </div>
      </div>
    </div>
  );
}
export default Projetos;
