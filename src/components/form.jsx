import React from 'react';

function Form() {
  return (
    <div>
      <form action="https://formsubmit.co/marianarocha308@gmail.com" method="POST">
        <input type="text" placeholder="Nome" name="name" required />
        <input type="text" placeholder="Email" name="email" required />
        <textarea placeholder="Deixe sua mensagem" />
        <button type="submit" className="button">Enviar</button>
      </form>
    </div>
  );
}
export default Form;
