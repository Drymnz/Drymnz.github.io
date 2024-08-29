import './Footer.css'
import IMG_LOGO from '../assets/Img/Logo.png'


// eslint-disable-next-line react/prop-types
function Footer({refDiv}) {
  const CELL_SVG = "https://www.svgrepo.com/show/511583/call-192.svg"
  const GMAIL_SVG = "https://www.svgrepo.com/show/473621/gmail.svg"
  const ADDRESS_SVG = "https://www.svgrepo.com/show/430111/address-pin-location.svg"

  const main = "bj97perezaguilar@gmail.com"
  const celular = "+502 4679 2122"
  const direccion = "Guatemala Quetzaltenango, Quetzaltenango"
  return (
    <>
    <div ref={refDiv}></div>
      <footer>
        <section>
          <div id='nav-footer'>
            <h4>Enlaces a otras secciones del sitio</h4>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Proyetos</a></li>
              <li><a href="#">Tecnologias</a></li>
              <li><a href="#">Educacion</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div id='logo-footer'>
            <img src={IMG_LOGO} alt="Logo representativo de mi persona" />
          </div>
          <div id='contact-footer'>
            <h4>Información de contacto</h4>
            <ul>
              <li><img src={ADDRESS_SVG} alt="SVG ADDRESS" />{direccion}</li>
              <li><img src={CELL_SVG} alt="SVG call" />{celular}</li>
              <li><img src={GMAIL_SVG} alt="SVG GMAIL" /> {main}</li>
            </ul>
          </div>
        </section>
      </footer>
      <div className='copyright'>
        <h4>copyright @2024</h4>
      </div>
    </>
  )
}

export default Footer