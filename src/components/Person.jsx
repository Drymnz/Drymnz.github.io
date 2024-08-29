import "./Person.css"
import PERSONA from "../assets/Json/Benjamin.json"
import FOTO from '../assets/Img/Foto.jpg'

// eslint-disable-next-line react/prop-types
function Person({refDiv}) {
  const Persona = PERSONA
  return (
    <>
      <div ref={refDiv} className="person">
        <section id="uno">
          <h1>{Persona.Nombre}</h1>
          <p>{Persona.Resumen}</p>
        </section>
        <section id="dos">
          <img src={FOTO} alt="Imagen de la persona" />
        </section>
      </div>
    </>
  )
}

export default Person