import type { PostMeta } from "~/type";
import type { Route } from "./+types";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData as { posts: PostMeta[] };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-8">📝 Blog</h2>
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-gray-800 p-6 rounded-lg shadow mb-4"
        >
          <h3 className="text-2xl font-semibold text-blue-400">{post.title}</h3>
          <p className="text-gray-300 mb-4">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
};

export default BlogPage;
