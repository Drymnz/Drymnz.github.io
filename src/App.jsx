import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Person from './components/Person'
import ListProyects from './components/ListProyects'
import { Listtechnology } from './components/Listtechnology'
import ListProgressCard from './components/ListProgressCard'


import LIST_EDUCATION from './assets/Json/ListEducation.json'
import LIST_OTRA_EDUCATION from './assets/Json/ListOtraEducation.json'
import { useRef } from 'react'

//<ProgressCard list={LIST_TECNOLOGY.Technology}></ProgressCard>
function App() {
  const listOne = LIST_EDUCATION.List
  const listTwo = LIST_OTRA_EDUCATION.List

  // Crear referencias para las secciones
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);



  // Funciones para desplazar la vista a cada sección
  const scrollToHome = () => {
    section1Ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToListProyect = () => {
    section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToListtechnology = () => {
    section3Ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToEducation = () => {
    section4Ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToFooter = () => {
    section5Ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header scrollToHome={scrollToHome} scrollToListProyect={scrollToListProyect} scrollToListtechnology={scrollToListtechnology} 
      scrollToFooter={scrollToFooter} scrollToEducation={scrollToEducation}
      />
      <Person refDiv={section1Ref} />
      <ListProyects refDiv={section2Ref} />
      <Listtechnology refDiv={section3Ref} />
      <h2>Titulos</h2>
      <ListProgressCard refDiv={section4Ref} list={listOne} />
      <h2>Diplomas</h2>
      <ListProgressCard  list={listTwo} />
      <Footer refDiv={section5Ref}
      scrollToHome={scrollToHome} scrollToListProyect={scrollToListProyect} scrollToListtechnology={scrollToListtechnology} 
      scrollToFooter={scrollToFooter} scrollToEducation={scrollToEducation}
       />
    </>
  )
}

export default App
