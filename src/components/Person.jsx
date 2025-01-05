import "./Person.css"
import PERSONA from "../assets/Json/Benjamin.json"
import FOTO from '../assets/Img/Foto.jpg'

function Person({ refDiv }) {
  const { Nombre, Resumen } = PERSONA;
  return (
    <div ref={refDiv} className="person">
      <section id="info" className="info-content">
        <h1>{Nombre}</h1>
        <p>{Resumen}</p>
      </section>
      <section id="photo" className="photo-content">
        <img src={FOTO} alt={`Foto de ${Nombre}`} className="person-photo" />
      </section>
    </div>
  );
}

export default Person;
