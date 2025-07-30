import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample blog posts data - replace with actual CMS data
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Dental Implants in India: Cost, Process & Best Clinics",
      excerpt: "Everything you need to know about getting dental implants in India, including costs, procedures, and top-rated clinics.",
      author: "Dr. Rajesh Kumar",
      date: "2025-01-15",
      category: "Dental Implants",
      image: "/api/placeholder/400/250",
      readTime: "8 min read",
      tags: ["dental implants", "cost", "india", "surgery"],
      featured: true
    },
    {
      id: 2,
      title: "Dental Tourism in India: Why International Patients Choose Indian Clinics",
      excerpt: "Discover why India has become the top destination for dental tourism with world-class treatments at affordable prices.",
      author: "Dr. Priya Sharma",
      date: "2025-01-12",
      category: "Dental Tourism",
      image: "/api/placeholder/400/250",
      readTime: "6 min read",
      tags: ["dental tourism", "international patients", "affordability"],
      featured: false
    },
    {
      id: 3,
      title: "Smile Makeover: Before and After Success Stories from Indian Clinics",
      excerpt: "Real patient transformations and success stories from dental clinics across India.",
      author: "Dr. Amit Patel",
      date: "2025-01-10",
      category: "Success Stories",
      image: "/api/placeholder/400/250",
      readTime: "5 min read",
      tags: ["smile makeover", "before after", "success stories"],
      featured: true
    },
    {
      id: 4,
      title: "Root Canal Treatment: Modern Techniques and Pain-Free Procedures",
      excerpt: "Learn about advanced root canal techniques that make the procedure comfortable and efficient.",
      author: "Dr. Sanjay Gupta",
      date: "2025-01-08",
      category: "Treatments",
      image: "/api/placeholder/400/250",
      readTime: "7 min read",
      tags: ["root canal", "painless", "modern techniques"],
      featured: false
    },
    {
      id: 5,
      title: "Orthodontic Treatment Options: Braces vs Aligners in India",
      excerpt: "Compare traditional braces with modern aligner options available in Indian dental clinics.",
      author: "Dr. Meera Singh",
      date: "2025-01-05",
      category: "Orthodontics",
      image: "/api/placeholder/400/250",
      readTime: "6 min read",
      tags: ["orthodontics", "braces", "aligners", "comparison"],
      featured: false
    },
    {
      id: 6,
      title: "Travel Guide: Planning Your Dental Tourism Trip to India",
      excerpt: "Essential tips for international patients planning their dental treatment journey to India.",
      author: "Travel Team",
      date: "2025-01-03",
      category: "Travel Guide",
      image: "/api/placeholder/400/250",
      readTime: "10 min read",
      tags: ["travel guide", "visa", "accommodation", "planning"],
      featured: false
    }
  ];

  const categories = ['all', 'Dental Implants', 'Dental Tourism', 'Success Stories', 'Treatments', 'Orthodontics', 'Travel Guide'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Dental Blog | Expert Insights & Patient Stories | Dental Tourism Clinics India</title>
        <meta name="description" content="Read expert dental insights, patient success stories, treatment guides, and dental tourism tips from top dental professionals in India." />
        <meta name="keywords" content="dental blog, dental tourism, treatment guides, patient stories, dental tips, india dental care" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/blog`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C73D2] mb-4">Dental Tourism Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, patient success stories, and comprehensive guides to help you make informed decisions about your dental care journey in India.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C73D2] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#2C73D2] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Posts Section */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Posts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#F4A300] text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-[#2C73D2] px-2 py-1 rounded text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-[#2C73D2] hover:text-[#F4A300] font-medium text-sm flex items-center gap-1"
                        >
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Posts Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {selectedCategory === 'all' ? 'Latest Posts' : `${selectedCategory} Posts`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.901-6.06 2.369l-.311-.311A8 8 0 1120.331 9.5z" />
                </svg>
                <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#F4A300] text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-[#2C73D2] px-2 py-1 rounded text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-[#2C73D2] hover:text-[#F4A300] font-medium text-sm flex items-center gap-1"
                        >
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-2xl p-8 mt-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Posts</h3>
            <p className="mb-6 opacity-90">Get expert dental insights and patient success stories delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#2C73D2] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
