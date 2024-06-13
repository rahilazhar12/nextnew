import React from 'react'
import Clientcity from './Clientcity';


// Predefined list of cities with their slugs
const cities = [
    { slug: "lahore" },
    { slug: "karachi" },
    { slug: "islamabad" },
    { slug: "rawalpindi" },
    // Add more cities as needed
];

// Function to generate static params for /city/[slug]
export function generateStaticParams() {
    // Generate the params array directly from the predefined list
    const paramsArray = cities.map((city) => ({
        slug: city.slug,
    }));

    return paramsArray;
}

async function getData() {
    let data = await fetch('https://www.admin786.pnytrainings.com/api/shortcourse/short-courses-in-karachi')
    data = await data.json();
    return data
}

async function getDataForSeo() {
    try {
        let newdata = await getData();
        let title1 = newdata.metas[0].meta_title;
        let description1 = newdata.metas[0].meta_description;
        return {
            title1,
            description1
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            title1: '',
            description1: ''
        };
    }
}



export default async function Courses() {
    const { title1, description1
    } = await getDataForSeo()

    console.log(title1)
    console.log(description1)


    return (

        <div>
            <h1>Courses Detail</h1>
            <hr />
            <h3>Title: {title1}</h3>
            <h3>Desc: {description1}</h3>

        </div>


    )
}


export async function generateMetadata() {
    const { title1, description1
    } = await getDataForSeo()


    return {
        title: title1,
        description: description1
    }
}