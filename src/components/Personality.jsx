import PERSONA from "../assets/Json/Benjamin.json"
import FOTO from '../assets/Img/Foto.jpeg'

function Personality() {
  const { Nombre } = PERSONA;
  return (
    <div className="person">
      <img src={FOTO} alt={`Foto de ${Nombre}`} className="person-photo" />
      <h1>{Nombre}</h1>
    </div>
  );
}

export default Personality;
