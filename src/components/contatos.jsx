import { React } from 'react';

function Contatos() {
  return (
    <div className="box-contato">
      <h2 className="contato-title">Contato</h2>

      <div className="contacts-link">
        <a href="https://www.linkedin.com/in/rochamarianadev/">
          <img src="https://user-images.githubusercontent.com/84882231/171651561-515cf511-9c2c-4ed6-85bd-b6320ad7d2d5.png" alt="" width="70px" height="70px" />
        </a>
        <a href="https://github.com/vixemari">
          <img src="https://user-images.githubusercontent.com/84882231/171651685-7aaa9bde-a1d1-4a70-a5b7-2cd6b1a26662.png" alt="" width="70px" height="70px" />
        </a>
        <a href="mailto:marianarocha308@gmail.com">
          <img src="https://user-images.githubusercontent.com/84882231/171651624-f59bddb7-953d-4b51-bd79-c2ea1663e3ae.png" alt="" width="70px" height="70px" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5579999393328">
          <img src="https://user-images.githubusercontent.com/84882231/171651609-eafe8a65-790f-49bc-9a52-c9a562328e4b.png" alt="" width="70px" height="70px" />
        </a>

      </div>
    </div>
  );
}
export default Contatos;
