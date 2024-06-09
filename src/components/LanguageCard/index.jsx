
export const LanguageCard = ({name, flag, description}) => {
  return(
    <div className="border border-yellow-100 p-5 text-center w-full sm:w-1/2 md:w-1/3">
      <h1 className="text-xl font-medium mb-2 ">{name}</h1>
      <img  className="vlajky" src={flag} />
      <p>{description}</p>
    </div>
  )
}


