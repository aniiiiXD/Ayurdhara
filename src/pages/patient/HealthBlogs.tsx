import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Search, Calendar, ArrowLeft, User } from 'lucide-react';
import Input from '../../components/ui/Input';
import { blogs } from '../../data/mockData';

const HealthBlogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ayurveda', name: 'Ayurveda' },
    { id: 'yoga', name: 'Yoga & Meditation' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'wellness', name: 'General Wellness' },
    { id: 'medical', name: 'Medical Advice' },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 pt-24">
        <div className="container-custom py-8">
          <Link to="/patient" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft size={18} className="mr-1" />
            <span>Back to Dashboard</span>
          </Link>
          
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Health Blogs</h1>
            <div className="w-full max-w-sm">
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search size={18} />}
              />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === category.id 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Featured Articles */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Featured Articles</h2>
                <div className="space-y-4">
                  {blogs
                    .filter(blog => blog.featured)
                    .slice(0, 3)
                    .map(blog => (
                      <div key={blog.id} className="flex items-start">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-16 h-16 object-cover rounded-md mr-3"
                        />
                        <div>
                          <h3 className="font-medium text-sm">{blog.title}</h3>
                          <p className="text-gray-500 text-xs mt-1">{blog.date}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            
            {/* Main Content - Blog Listings */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map(blog => (
                    <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5">
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span>{blog.date}</span>
                          <span className="mx-2">•</span>
                          <User size={14} className="mr-1" />
                          <span>{blog.author}</span>
                        </div>
                        
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 h-[3.5rem]">{blog.title}</h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {blog.summary}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {
                              categories.find(cat => cat.id === blog.category)?.name || 'Uncategorized'
                            }
                          </span>
                          <button className="text-blue-600 hover:text-blue-800">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Search size={24} className="text-gray-400" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">No Articles Found</h2>
                    <p className="text-gray-500">
                      We couldn't find any articles matching your search criteria.
                      Try different keywords or browse all categories.
                    </p>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {filteredBlogs.length > 0 && (
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-2 border rounded-md bg-blue-500 text-white">
                      1
                    </button>
                    <button className="px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-50">
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthBlogs;