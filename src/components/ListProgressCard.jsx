/* eslint-disable react/prop-types */
import Education from "./Education"
import './ListProgressCard.css'

// eslint-disable-next-line react/prop-types
function ListProgressCard({list:list}) {
    //const list = LIST_EDUCATION.List
    return (
        <>
            <div  className="list_education">
                {list.map((educ) => (
                    <Education key={educ.Title} title={educ.Title} active={educ.Active} urlImg={educ.Logo} />
                ))}
            </div>
        </>
    )
}
export default ListProgressCard