"use client"
import { ArrowRight } from 'lucide-react';

export default function LatestBlogPosts() {
  const blogPosts = [
    {
      id: 1,
      title: "Top tips for effective home tutoring",
      description: "Share practical advice on how students can make the most out of tutoring sessions",
      image: "/api/placeholder/400/320",
      alt: "Mother helping daughter with homework at a desk with blue wall background"
    },
    {
      id: 2,
      title: "Building a productive study environment",
      description: "Share practical advice on how students can make the most out of tutoring sessions",
      image: "/api/placeholder/400/320",
      alt: "Teacher organizing educational materials on a desk"
    },
    {
      id: 3,
      title: "5 skills every great tutor should have",
      description: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge",
      image: "/api/placeholder/400/320",
      alt: "Woman in red helping boy with studies at a table"
    },
    {
      id: 4,
      title: "Getting the best individual tuition",
      description: "Share practical advice on how students can make the most out of tutoring sessions",
      image: "/api/placeholder/400/320",
      alt: "Woman helping young girl with homework at desk with bookshelf"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-gray-800">Our Latest Blog Posts</h2>
        <button className="flex items-center gap-1 bg-rose-700 hover:bg-rose-800 text-white px-3 py-1 rounded text-sm">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded overflow-hidden shadow">
            <div className="h-40 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-2 text-sm">{post.title}</h3>
              <p className="text-xs text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}