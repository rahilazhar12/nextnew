import ClientCourses from "./Clientcourses";


export default async function Page({ params }) {
  const metadata = await fetch(
    `https://www.admin786.pnytrainings.com/api/category/${params.slug}`,
    {
      cache: "force-cache",
    }
  )
    .then((response) => response.json())
    .then((data) => ({
      metatitle: data.category.meta_title,
      metadescription: data.category.meta_description,
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

      <ClientCourses params={params} />
    </>
  );
}
