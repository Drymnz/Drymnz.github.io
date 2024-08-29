import LIST_TECNOLOGY from "../assets/Json/ListTechnology.json";
import ProgressCard from './ProgressCard'
import './Listtechnology.css'

//"Img": "./src/assets/react.svg"
// eslint-disable-next-line react/prop-types
export function Listtechnology({refDiv}) {
    const listTecnology = LIST_TECNOLOGY.Technology
    return (
        <>
            <h2>Tecnologia</h2>
            <div ref={refDiv} className="tecnologys">
                {listTecnology.map((tec, index) => (
                    <ProgressCard key={`${tec.Title}-${index}`} title={tec.Title} img={tec.Img} percentage={tec.Level} />
                ))}
            </div>
        </>
    )
}