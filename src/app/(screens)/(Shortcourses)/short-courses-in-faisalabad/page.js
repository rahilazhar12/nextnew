import Faislabad1 from "./Faislabad1";



export default async function Sialkotblogpage() {
    const metadata = await fetch(
        `https://www.admin786.pnytrainings.com/api/shortcourse/short-courses-in-faisalabad`,
        {
            cache: 'force-cache'
        }
    )
        .then((response) => response.json())
        .then((data) => ({
            metatitle: data.metas[0].meta_title,
            metadescription: data.metas[0].meta_description
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
            <Faislabad1 />

        </>
    );
}
