import "./Header.css"
import IMG_LOGO from '../assets/Img/Logo.png'

// eslint-disable-next-line react/prop-types
function Header( { scrollToHome,scrollToListProyect,scrollToListtechnology, scrollToEducation,scrollToFooter  }) {
    const clickToHome = () =>{scrollToHome()}
    const clickListProyect = () =>{scrollToListProyect()}
    const clickListtechnology = () =>{scrollToListtechnology()}
    const clickEducation = () =>{scrollToEducation()}
    const clickFooter = () =>{scrollToFooter()}
    return (
        <>
            <header>
                <section>
                    <img src={IMG_LOGO} alt="Logo representativo de mi persona" />
                </section>
                <section className="header-section-button">
                    <nav>
                        <button onClick={clickToHome} >Inicio</button>
                        <button onClick={clickListProyect} >Proyectos</button>
                        <button onClick={clickListtechnology}>Tecnologias</button>
                        <button onClick={clickEducation}>Eduacion</button>
                        <button onClick={clickFooter}>Contacto</button>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header