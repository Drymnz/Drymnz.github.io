import './App.css'
import Education from './components/Education'
import Experience from './components/Experience'
import Information from './components/Information'
import Personality from './components/Personality'
import PlatformList from './components/PlatformList'
import Technology from './components/Technology'

function App() {

  const languages = [
    { Title: "Español", Img: "spanish.png" },
    { Title: "Inglés A1", Img: "ingles.png" }
  ];

  const platforms = [
    { Title: "Linux", Img: "linux.svg" },
    { Title: "Windows", Img: "windows-applications.svg" }
  ];
  return (
    <>
      <div className='container'>
        <div className='left-div'>
          <Personality />
          <Technology />
          <PlatformList title="enum LANGUAGES" data={languages} />
          <PlatformList title="enum PLATFORMS" data={platforms} />
        </div>
        <div className='right-div'>
          <Information />
          <Experience />
          <Education />
        </div>
      </div>
    </>
  )
}

export default App
