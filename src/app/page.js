
import ClientComponent from "./(screens)/home/Client";





export default async function Home() {
  const metadata = await fetch(
    "https://www.admin786.pnytrainings.com/api/metas/home",
    {
      cache: "force-cache",
    }
  )
    .then((response) => response.json())
    .then((data) => ({
      metatitle: data.metas[0].meta_title,
      metadescription: data.metas[0].meta_description,
    }))
    .catch((error) => {
      console.error("Error fetching metadata:", error);
      return {
        metatitle: "",
        metadescription: "",
      };
    });

  return (
    <>
      <title>{metadata.metatitle}</title>
      <meta name="description" content={metadata.metadescription} />
      <link rel="icon" href="/favicon.ico" />

        <ClientComponent />
    </>
  );
}
