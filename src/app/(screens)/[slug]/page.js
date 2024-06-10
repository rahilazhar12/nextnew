import Coursedetail from "./courseDetails";



export default async function Home({ params }) {
    const metadata = await fetch(
        `https://www.admin786.pnytrainings.com/api/course/${params.slug}`,
        {
            cache: "force-cache",
        }
    )
        .then((response) => response.json())
        .then((data) => ({
            metatitle: data.course.meta_title,
            metadescription: data.course.meta_description,
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

            <Coursedetail params={params} />


        </>
    );
}
