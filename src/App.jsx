import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Person from './components/Person'
import ProgressCard from './components/ProgressCard'
import Education from './components/Education'
import LIST_TECNOLOGY from "./assets/Json/ListTechnology.json";
import ListProyects from './components/ListProyects'

//<ProgressCard list={LIST_TECNOLOGY.Technology}></ProgressCard>
function App() {
  const listTecnology = LIST_TECNOLOGY.Technology
  return (
    <>
      <Header></Header>
      <Person></Person>
      <ListProyects/>
      {listTecnology.map((tec) => (
        <ProgressCard key={tec.Title} title={tec.Title} img={tec.Img} percentage={tec.Level} />
      ))}
      <Education></Education>
      <Footer></Footer>
    </>
  )
}

export default App
