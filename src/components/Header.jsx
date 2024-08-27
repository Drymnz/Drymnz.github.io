import "./Header.css"
import IMG_LOGO from '../assets/Img/Logo.png'

function Header() {
    return (
        <>
            <header>
                <section>
                    <img src={IMG_LOGO} alt="Logo representativo de mi persona" />
                </section>
                <section>
                    <button>Inicio</button>
                    <button>Proyectos</button>
                    <button>Tecnologias</button>
                    <button>Eduacion</button>
                    <button>Contacto</button>
                </section>
            </header>
        </>
    )
}

export default Header