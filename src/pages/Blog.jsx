import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";


function Blog() {
    return (
        <>
            <section className="bg-(--secondary-color) text-white">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">

                    <h2 className="text-[30px] md:text-[45px] font-bold leading-tight mt-3">
                        Insurance Insights
                    </h2>
                    <p className="mt-4 text-lg text-gray-200">
                        Expert tips, guides, and news to help you make informed decisions about your coverage.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-10">

                <div className="grid md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

            </div>

        </>
    );
}

export default Blog;