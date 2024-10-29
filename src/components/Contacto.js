import React from 'react';

const Contacto = () => {
  return (
    <div>
      <h2>Contáctame</h2>
      <form>
        <input type="text" placeholder="Asunto:" />
        <input type="email" placeholder="example@gmail.com" />
        <input type="text" placeholder="Mensaje:" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contacto;
