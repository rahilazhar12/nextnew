import Amazonvirtualassistant1 from "./Amazonvirtualassistant1";

export default async function Home() {
  const metadata = await fetch(`https://www.admin786.pnytrainings.com/api/city/specialpage/amazon-virtual-assistant-course-in-islamabad`)
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
       <Amazonvirtualassistant1/>
  
      </>
    );
  }