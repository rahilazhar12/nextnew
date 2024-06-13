import Freelancingcourse1 from "./Freelancingcourse1";

export default async function Freelancingcourse() {
  const metadata = await fetch('https://www.admin786.pnytrainings.com/api/city/specialpage/freelancing-course-in-rawalpindi', {
    cache: 'force-cache'
  })
    .then((response) => response.json())
    .then((data) => ({
      metatitle: data.special_page.meta_title,
      metadescription: data.special_page.meta_description
    }))
    .catch((error) => {
      console.error("Error fetching metadata:", error);
      return {
        metatitle: 'Default Title',
        metadescription: 'Default Description'
      };
    });

  return (
    <>
      <title>{metadata.metatitle}</title>
      <meta name="description" content={metadata.metadescription} />
      <Freelancingcourse1 />
    </>
  );
}