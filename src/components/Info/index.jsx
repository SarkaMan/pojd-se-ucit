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

export const obsahZajimavostiAnglictina = [
  {
    name: 'Vzdušný jazyk',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Méně slov k domluvě než peněz za dva obědy',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Nejdelší slovo',
    text: 'Antidisestablishmentarianism',
  },
];

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

export const obsahZajimavostiSpanelstina = [
  {
    name: 'Vzdušný jazyk',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Méně slov k domluvě než peněz za dva obědy',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Nejdelší slovo',
    text: 'Antidisestablishmentarianism',
  },
];


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

export const obsahZajimavostiPortugalstina = [
  {
    name: 'Vzdušný jazyk',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Méně slov k domluvě než peněz za dva obědy',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Nejdelší slovo',
    text: 'Antidisestablishmentarianism',
  },
];


const Info = ({ name, text,  }) => {
  return (
    <div className="w-full px-2">
      <h1 className="text-xl font-medium mb-2 mt-2"> {name} </h1>
      <p> {text} </p>
      </div>
    
  );
};

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


