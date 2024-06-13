import Sialkotdetails from "./Sialkotdetail";

// Function to fetch the slug from the API (simplified)
async function fetchSlug() {
    return {
        slug: 'short-courses-in-sialkot',
    };
}

// Function to generate static params for /blog/short-course-in-sialkot/[slug]
export async function generateStaticParams() {
    const slug = await fetchSlug();
    return [slug];  // Return an array with a single slug object
}

// Page component
export default async function Sialkotblogpage({ params }) {
    const metadata = await fetch(
        `https://www.admin786.pnytrainings.com/api/shortcourse/short-course-in-sialkot`,
        {
            cache: 'force-cache'
        }
    )
    .then((response) => response.json())
    .then((data) => {
        const course = data.courses.find(course => course.slug === params.slug);
        return {
            metatitle: course ? course.meta_title : '',
            metadescription: course ? course.meta_description : ''
        };
    })
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
            <Sialkotdetails params={params} />
        </>
    );
}
