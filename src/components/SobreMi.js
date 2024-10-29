import React from 'react';
import foto from '../assets/foto.jpg';

const SobreMi = () => {
  return (
    <div>
      <h2>Sobre mi</h2>
      <p>
        Estudiante de Tecnología en sistemas, tengo 20 años, vivo en el municipio de Villamaria/Caldas, con estudios finalizados Técnico en ejecución musical con instrumentos funcionales en el año 2020 y Técnico laboral por competencias en asistencia y soporte de tecnologías de la información finalizado en el año 2023.
      </p>
      <img src={foto} width="200" alt="Foto de Sergio Amaya" />
    </div>
  );
}

export default SobreMi;
