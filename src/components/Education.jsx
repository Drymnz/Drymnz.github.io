// eslint-disable-next-line react/prop-types
function Education({ title, active,  urlImg }) {
  const COLOR_ACTIVE_TRUE = "#0BD450"
  const COLOR_ACTIVE_FALSE = "#686384"
  const activeColor = active ? COLOR_ACTIVE_TRUE : COLOR_ACTIVE_FALSE;
  return (
    <>
      <div className="education">
        <h2>{title}</h2>
        <section>
          <img src={urlImg} alt="" />
          <svg width="20" height="20">
            <circle cx="10" cy="10" r="10" fill={activeColor} />2
          </svg>
        </section>
      </div>
    </>
  )
}

export default Education