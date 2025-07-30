import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { id } = useParams();

  // Sample blog post data - replace with actual CMS data
  const blogPost = {
    id: 1,
    title: "Complete Guide to Dental Implants in India: Cost, Process & Best Clinics",
    content: `
      <p>Dental implants have revolutionized modern dentistry, offering a permanent solution for missing teeth. India has emerged as a leading destination for dental implant procedures, combining world-class technology with exceptional affordability.</p>
      
      <h2>What Are Dental Implants?</h2>
      <p>Dental implants are titanium posts surgically placed into the jawbone to replace the root of a missing tooth. Once integrated with the bone, they provide a stable foundation for crowns, bridges, or dentures.</p>
      
      <h2>Why Choose India for Dental Implants?</h2>
      <ul>
        <li><strong>Cost-Effective:</strong> Dental implants in India cost 60-80% less than Western countries</li>
        <li><strong>World-Class Technology:</strong> Indian clinics use the latest equipment and techniques</li>
        <li><strong>Qualified Professionals:</strong> Many dentists are internationally trained and certified</li>
        <li><strong>Comprehensive Care:</strong> Complete treatment packages including accommodation and travel</li>
      </ul>
      
      <h2>Cost Breakdown</h2>
      <p>The cost of dental implants in India varies by city and clinic type:</p>
      <ul>
        <li><strong>Single Implant:</strong> ₹25,000 - ₹80,000 ($300 - $950)</li>
        <li><strong>All-on-4 Implants:</strong> ₹2,50,000 - ₹6,00,000 ($3,000 - $7,200)</li>
        <li><strong>Full Mouth Implants:</strong> ₹4,00,000 - ₹12,00,000 ($4,800 - $14,400)</li>
      </ul>
      
      <h2>The Procedure Process</h2>
      <ol>
        <li><strong>Initial Consultation:</strong> Comprehensive examination and treatment planning</li>
        <li><strong>Implant Placement:</strong> Surgical insertion of titanium implant</li>
        <li><strong>Healing Period:</strong> 3-6 months for osseointegration</li>
        <li><strong>Crown Placement:</strong> Final restoration attachment</li>
        <li><strong>Follow-up Care:</strong> Regular check-ups and maintenance</li>
      </ol>
      
      <h2>Top Cities for Dental Implants</h2>
      <p>India's major cities offer excellent dental implant facilities:</p>
      <ul>
        <li><strong>Mumbai:</strong> Maximum number of specialized clinics</li>
        <li><strong>Delhi:</strong> Government and private hospital options</li>
        <li><strong>Bangalore:</strong> Technology hub with advanced equipment</li>
        <li><strong>Chennai:</strong> Medical tourism friendly infrastructure</li>
        <li><strong>Hyderabad:</strong> Affordable options with quality care</li>
      </ul>
      
      <h2>Choosing the Right Clinic</h2>
      <p>When selecting a clinic for dental implants, consider:</p>
      <ul>
        <li>Dentist qualifications and experience</li>
        <li>Clinic accreditation and certifications</li>
        <li>Technology and equipment used</li>
        <li>Patient reviews and success rates</li>
        <li>Warranty and follow-up care policies</li>
      </ul>
      
      <h2>Recovery and Aftercare</h2>
      <p>Proper aftercare is crucial for implant success:</p>
      <ul>
        <li>Maintain excellent oral hygiene</li>
        <li>Attend regular dental check-ups</li>
        <li>Avoid smoking and excessive alcohol</li>
        <li>Follow prescribed medications</li>
        <li>Report any unusual symptoms immediately</li>
      </ul>
      
      <h2>Success Rates and Longevity</h2>
      <p>Dental implants have a success rate of 95-98% when performed by qualified professionals. With proper care, implants can last 20-25 years or even a lifetime.</p>
      
      <h2>Conclusion</h2>
      <p>Dental implants in India offer an excellent combination of quality, affordability, and expertise. With proper research and planning, international patients can achieve beautiful, functional smiles while enjoying significant cost savings.</p>
    `,
    author: "Dr. Rajesh Kumar",
    date: "2025-01-15",
    category: "Dental Implants",
    image: "/api/placeholder/800/400",
    readTime: "8 min read",
    tags: ["dental implants", "cost", "india", "surgery"]
  };

  return (
    <>
      <Helmet>
        <title>{blogPost.title} | Dental Tourism Clinics India</title>
        <meta name="description" content="Complete guide to dental implants in India including costs, procedures, and best clinics for international patients." />
        <meta name="keywords" content="dental implants india, cost, procedure, clinics, dental tourism" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/blog/${id}`} />
      </Helmet>

      <article className="min-h-screen bg-white">
        {/* Header Image */}
        <div className="relative h-96 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative text-center text-white z-10 px-4">
            <div className="mb-4">
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm opacity-90">
              <span>By {blogPost.author}</span>
              <span>•</span>
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Navigation */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-[#2C73D2] hover:text-[#F4A300] font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map(tag => (
              <span key={tag} className="bg-blue-100 text-[#2C73D2] px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Share Section */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </button>
              <button className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
              <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/2" className="group">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/api/placeholder/400/200" alt="Related Article" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="text-sm text-[#2C73D2] font-medium">Dental Tourism</span>
                    <h4 className="text-lg font-bold text-gray-800 mt-2 group-hover:text-[#2C73D2] transition-colors">
                      Why India is the Top Destination for Dental Tourism
                    </h4>
                    <p className="text-gray-600 mt-2 text-sm">6 min read</p>
                  </div>
                </div>
              </Link>
              <Link to="/blog/3" className="group">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/api/placeholder/400/200" alt="Related Article" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="text-sm text-[#2C73D2] font-medium">Success Stories</span>
                    <h4 className="text-lg font-bold text-gray-800 mt-2 group-hover:text-[#2C73D2] transition-colors">
                      Smile Makeover: Real Patient Transformations
                    </h4>
                    <p className="text-gray-600 mt-2 text-sm">5 min read</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
