import Digitalmarketingargoda1 from "./Digitalmarketingargoda1";

export default async function Digitalmarketingargoda() {
    const metadata = await fetch(`https://www.admin786.pnytrainings.com/api/city/specialpage/digital-marketing-courses-sargodha`)
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
         <Digitalmarketingargoda1/>
  
      </>
    );
  }