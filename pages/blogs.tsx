import BlogsCard from 'components/BlogsCard';
import Container from 'components/Container';
import Footer from 'components/Footer';
import blogsData from 'data/blogs';

export default function Blogs() {
  return (
    <Container title="Blogs - Vishal Patil" description="Blogs that I wrote!">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blogs
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I write Blogs to share a bit of knowledge and experiences I have. You
          can check them out here. Let me know what you think!
        </p>
        <div className="w-full">
          {blogsData.map((blog) => (
            <BlogsCard
              title={blog.title}
              description={blog.description}
              link={blog.link}
              blogImage={blog.blogImage}
              tags={blog.tags}
              brandColor={blog.brandColor}
            />
          ))}
        </div>
        <Footer />
      </div>
    </Container>
  );
}
