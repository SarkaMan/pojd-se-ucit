export const Info = ({ name, text,  }) => {
  return (
    <div className="w-full sm:w-1/2 px-2">
      <h1 className="text-xl font-medium mb-2 mt-2"> {name} </h1>
      <p> {text} </p>
      </div>
    
  );
};

export const obsahInformaceAnglictina = [
  {
    name: 'Informace o jazyku',
    text: 'Angličtina je západogermánský jazyk, který vznikl v Anglii a stal se globálním komunikačním prostředkem. Je oficiálním jazykem v mnoha zemích světa a používá se v mezinárodních institucích, obchodu a vědě. Angličtina má bohatou slovní zásobu a je známa svou flexibilitou a schopností přejímat slova z jiných jazyků.',
  },
  {
    name: 'Kde se tak mluví',
    text: 'Angličtina jako úřední jazyk, příp. jeden z úředních jazyků, figuruje samozřejmě ve Spojeném království, Spojených státech, Irsku, Kanadě, Austrálii nebo na Novém Zélandu. Angličtinu ale zaslechneme takřka po celém světě. Hojně v bývalých koloniích Velké Británie, méně či více hojně v zemích dalších.',
  },
];

export const Infos = ({ obsahInformace }) => {
  return (
    <div className="language-container">
      <div className="flex flex-col gap-4">
        {obsahInformace.map((obsah) => {
          return (
            <Info
              name={obsah.name}
              text={obsah.text}
            />
          );
        })}
      </div>
    </div>
  );
};



// SPANELSTINA

export const InfoSj = ({ name, text,  }) => {
  return (
    <div className="w-full sm:w-1/2 px-2">
      <h1 className="text-xl font-medium mb-2 mt-2"> {name} </h1>
      <p> {text} </p>
      </div>
    
  );
};

export const obsahInformaceSpanelstina = [
  {
    name: 'Informace o jazyku',
    text: 'Angličtina je západogermánský jazyk, který vznikl v Anglii a stal se globálním komunikačním prostředkem. Je oficiálním jazykem v mnoha zemích světa a používá se v mezinárodních institucích, obchodu a vědě. Angličtina má bohatou slovní zásobu a je známa svou flexibilitou a schopností přejímat slova z jiných jazyků.',
  },
  {
    name: 'Kde se tak mluví',
    text: 'Angličtina jako úřední jazyk, příp. jeden z úředních jazyků, figuruje samozřejmě ve Spojeném království, Spojených státech, Irsku, Kanadě, Austrálii nebo na Novém Zélandu. Angličtinu ale zaslechneme takřka po celém světě. Hojně v bývalých koloniích Velké Británie, méně či více hojně v zemích dalších.',
  },
];

export const InfosSj = ({ obsahInformace }) => {
  return (
    <div className="language-container">
      <div className="flex flex-col gap-4">
        {obsahInformaceSpanelstina.map((obsah) => {
          return (
            <InfoSj
              name={obsah.name}
              text={obsah.text}
            />
          );
        })}
      </div>
    </div>
  );
};




// PORTUGALSTINA


export const InfoPtg = ({ name, text,  }) => {
  return (
    <div className="w-full sm:w-1/2 px-2">
      <h1 className="text-xl font-medium mb-2 mt-2"> {name} </h1>
      <p> {text} </p>
      </div>
    
  );
};

export const obsahInformacePortugalstina = [
  {
    name: 'Informace o jazyku',
    text: 'Angličtina je západogermánský jazyk, který vznikl v Anglii a stal se globálním komunikačním prostředkem. Je oficiálním jazykem v mnoha zemích světa a používá se v mezinárodních institucích, obchodu a vědě. Angličtina má bohatou slovní zásobu a je známa svou flexibilitou a schopností přejímat slova z jiných jazyků.',
  },
  {
    name: 'Kde se tak mluví',
    text: 'Angličtina jako úřední jazyk, příp. jeden z úředních jazyků, figuruje samozřejmě ve Spojeném království, Spojených státech, Irsku, Kanadě, Austrálii nebo na Novém Zélandu. Angličtinu ale zaslechneme takřka po celém světě. Hojně v bývalých koloniích Velké Británie, méně či více hojně v zemích dalších.',
  },
];

export const InfosPtg = ({ obsahInformace }) => {
  return (
    <div className="language-container">
      <div className="flex flex-col gap-4">
        {obsahInformacePortugalstina.map((obsah) => {
          return (
            <InfoPtg
              name={obsah.name}
              text={obsah.text}
            />
          );
        })}
      </div>
    </div>
  );
};
