import Androidcourse1 from "./Androidcourse1";

export default async function Androidcourse() {
  const metadata = await fetch(`https://www.admin786.pnytrainings.com/api/city/specialpage/android-development-course-in-islamabad`, {
    cache: 'force-cache'
  })
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
        <Androidcourse1/>
  
      </>
    );
  }