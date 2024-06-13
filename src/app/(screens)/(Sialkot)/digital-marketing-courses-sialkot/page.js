import DigitalMarksialkot1 from "./DigitalMarksialkot1";

export default async function DigitalMarksialkot() {
  const metadata = await fetch('https://www.admin786.pnytrainings.com/api/city/specialpage/digital-marketing-courses-sialkot', {
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
      <DigitalMarksialkot1 />

    </>
  );
}