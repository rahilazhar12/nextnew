import Digitalmarketing1 from "./Digitalmarketing1";

export default async function Digitalmarketing() {
    const metadata = await fetch(`https://www.admin786.pnytrainings.com/api/city/specialpage/digital-marketing-course-in-islamabad`)
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
        <Digitalmarketing1/>
      </>
    );
  }