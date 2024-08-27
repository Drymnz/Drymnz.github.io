import Proyect from './Proyect';
import './Proyect.css'
import LIST_PROYECT from '../assets/Json/ListProyect.json'

function ListProyects() {
    const listProyects = LIST_PROYECT.List
    return (
        <>
            <div className='proyects'>
                {listProyects.map((proyect, index) => (
                    <Proyect key={`${proyect.Title}-${index}`} title={proyect.Title} urlImg={proyect.UrlImg} description={proyect.Description} useTechnology={proyect.UseTechnology} urlGithub={proyect.Link} />
                ))}
            </div>
        </>
    );
}

export default ListProyects;