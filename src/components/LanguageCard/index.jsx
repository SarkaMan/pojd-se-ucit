
export const LanguageCard = ({name, flag, description}) => {
  return(
    <div className="language-card">
      <h1>{name}</h1>
      <img className="vlajky" src={flag}/>
      <p>{description}</p>
    </div>
  )
}
