async function getBlog(slug) {
    console.log('slug', `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
        // http://localhost:1337/api/blogs?filters[slug][$eq]=headless-cms-with-next-js-and-strapi-a-complete-guide&populate=*
        { cache: "no-store" }
    );

    return res.json();
}

export default async function BlogDetailPage({ params }) {
    // console.log('slug', params);
    const { data } = await getBlog(params.slug);
    console.log(data);


    if (!data || data.length === 0) {
        return (
            <div className="py-20 text-center text-gray-500">
                Blog not found
            </div>
        );
    }

    const blog = data[0].attributes;

    return (
        <article className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.description }}
            />
        </article>
    );
}
