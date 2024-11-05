// eslint-disable-next-line react/prop-types
function Proyect({ title, urlImg, description, useTechnology, urlGithub }) {
  return (
    <>
      <div className="proyect">
        <h3>{title}</h3>
        <img src={urlImg} alt="" />
        <p>{description}</p>
        <div>{useTechnology}</div>
        <a href={urlGithub}>Visita nuestra página web</a>
      </div>
    </>
  )
}

export default Proyect