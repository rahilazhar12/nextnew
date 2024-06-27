import BestITDiplomas1 from "./BestITDiplomas1";


export default async function BestITDiplomas() {
  const metadata = await fetch(`https://www.admin786.pnytrainings.com/api/city/specialpage/it-diplomas-in-islamabad`)
    .then((response) => response.json())
    .then((data) => ({
      metatitle: data.special_page.meta_title,
      metadescription:data.special_page.meta_description
    }))
    .catch((error) => {
      console.error("Error fetching metadata:", error);
      return {
        metatitle: '',
        metadescription: ''
      };
    });

  
    return (
      <>
        <title>{metadata.metatitle}</title>
        <meta name="description" content={metadata.metadescription} />
        <BestITDiplomas1/>
      </>
    );
  }