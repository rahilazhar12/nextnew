import Blogdetails from "./Blogdetailpage";

export async function generateStaticParams() {
  // Fetch the slugs that you want to generate static pages for
  const response = await fetch('https://www.admin786.pnytrainings.com/api/featuredposts');
  const posts = await response.json();

  return posts.featured_posts.map(post => ({
    slug: [post.category_slug, post.url_slug] // Adjust the property according to your API response
  }));
}

export default async function Blogdetailsnew({ params }) {
  const slug = params.slug.join('/');
  const metadata = await fetch(`https://www.admin786.pnytrainings.com/api/featuredposts/${params.slug[1]}`)
    .then(response => response.json())
    .then(data => ({
      metatitle: data.post_detail.meta_title,
      metadescription: data.post_detail.meta_description
    }))
    .catch(error => {
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
      <Blogdetails params={params.slug[1]} />
    </>
  );
}
