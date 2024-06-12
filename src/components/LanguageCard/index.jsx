
export const LanguageCard = ({name, flag, description}) => {
  return (
    <div className="border border-yellow-100 p-5 text-center w-full min-w-[200px]">
      <h1 className="text-xl font-medium mb-2">{name}</h1>
      <img className="vlajky" src={flag} alt={`${name} flag`} />
      <p>{description}</p>
    </div>
  )
}
