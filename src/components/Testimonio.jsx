import React from 'react';
import imagenEmma from '../img/testimonio-emma.png';
import imagenSarah from '../img/testimonio-sarah.png';
import imagenShawn from '../img/testimonio-shawn.png';
import '../stylesheets/Testimonio.css';

const imagenes = {
  emma: imagenEmma,
  sarah: imagenSarah,
  shawn: imagenShawn
};

function Testimonio(props) {
  const imagenSeleccionada = imagenes[props.imagen];
  return (

    <div className='contenedor-testimonio'>
      <img className='img-testimonio' src={imagenSeleccionada} alt={props.nombre} />

      <div className='contenedor-texto-testimonio'>
        <div className='contenedor-descripcion'>
          <h3 className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</h3>
          <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        </div>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;