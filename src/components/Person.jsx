import "./Person.css"
import PERSONA from "../assets/Json/Benjamin.json"
import FOTO from '../assets/Img/Foto.jpg'

function Person() {
  const Persona = PERSONA
  return (
    <>
      <div className="person">
        <section id="uno">
          <h1>{Persona.Nombre}</h1>
          <h4>{Persona.Edad}</h4>
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