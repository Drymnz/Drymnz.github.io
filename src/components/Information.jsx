import NUMBER_PHONE from '../assets/Img/NumeberPhone.png'
import EMAIL from '../assets/Img/Email.png'
import PERSONA from "../assets/Json/Benjamin.json"

function Information() {
  const { Nombre, Cargo, Ubicacion, LicenciaVehiculo, Edad } = PERSONA;
  
  return (
    <div className="information">
      <h1 className="section-title">public INFORMATION</h1>
        <p><span className="keyword">public string</span> <span className="string">"{Nombre}"</span>,</p>
        <p><span className="keyword">public string</span> <span className="string">"{Cargo}"</span>,</p>
        <p><span className="keyword">public email</span> <img src={EMAIL} className="email" alt="email" /></p>
        <p><span className="keyword">public PHONE =</span> <img src={NUMBER_PHONE} className="number_phone" alt="phone" /></p>
        <p><span className="keyword">public LOCATION =</span> [<span className="string">'{Ubicacion}'</span>]</p>
        <p><span className="keyword">VEHICLE LICENSE =</span> <span className="boolean">{String(LicenciaVehiculo)}</span></p>
        <p><span className="keyword">AGE =</span> <span className="number">{Edad}</span></p>
    </div>
  );
}

export default Information;