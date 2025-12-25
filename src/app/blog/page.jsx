import Link from 'next/link';
import { posts } from '../../data/posts';

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Daftar Blog</h1>

      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-500">
            {post.author} • {post.date}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:underline"
          >
            Baca Selengkapnya →
          </Link>
        </div>
      ))}
    </div>
  );
}
