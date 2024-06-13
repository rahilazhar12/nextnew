import ClientCourses from "./Clientcourses";
import Head from "next/head";

export async function generateStaticParams() {
  const res = await fetch('https://www.admin786.pnytrainings.com/api/category');
  const categories = await res.json();

  if (!Array.isArray(categories)) {
    console.error('API response is not an array:', categories);
    return [];
  }

  return categories.map((category) => ({
    slug: category.url_slug,
  }));
}

export default async function Page({ params }) {
  const metadata = await fetch(
    `https://www.admin786.pnytrainings.com/api/category/${params.slug}`,
    {
      cache: "force-cache",
    }
  )
    .then((response) => response.json())
    .then((data) => ({
      metatitle: data.meta_title || "",
      metadescription: data.meta_description || "",
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
      <Head>
        <title>{metadata.metatitle}</title>
        <meta name="description" content={metadata.metadescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClientCourses params={params} />
    </>
  );
}
