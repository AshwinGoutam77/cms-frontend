async function getBlogs() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`,
        { cache: "no-store" }
    );
    return res.json();
}

export default async function BlogPage() {
    const { data } = await getBlogs();

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Our Blogs</h1>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Insights, tutorials, and updates from our tech team
                    </p>
                </div>

                {/* Blog Grid */}
                {data?.length ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((blog) => {
                            const { title, description, coverImage } = blog;
                            console.log('coverImage', blog);


                            return (
                                <article
                                    key={blog.id}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                                >
                                    {/* Cover Image */}
                                    {coverImage?.data && (
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.url}`}
                                            alt={title}
                                            className="h-52 w-full object-cover"
                                        />
                                    )}

                                    {/* Content */}
                                    <div className="p-6">
                                        <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverImage[0].formats.large.url}`} alt={title} className="h-52 w-full object-cover mb-4 rounded" />
                                        <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
                                            {title}
                                        </h2>

                                        <div
                                            className="mt-3 text-gray-600 text-sm line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: description }}
                                        />

                                        <div className="mt-6">
                                            <a
                                                href={`/blog/${blog.slug}`}
                                                className="inline-flex items-center text-indigo-600 font-medium hover:underline"
                                            >
                                                Read More →
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No blogs found</p>
                )}
            </div>
        </section>
    );
}
