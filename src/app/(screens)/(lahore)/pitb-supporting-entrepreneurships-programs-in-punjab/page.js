import PITB1 from "./PITB1";
import Head from "next/head";


export default async function PITB() {
  const metadata = await fetch('https://www.admin786.pnytrainings.com/api/city/specialpage/pitb-supporting-entrepreneurships-programs-in-punjab', {
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
      <Head>
        <title>{metadata.metatitle}</title>
        <meta name="description" content={metadata.metadescription} />
      </Head>
      <PITB1 />
    </>
  );
}
