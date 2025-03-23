import React, { useState } from 'react';
import { Menu, X, Camera, Film, Github, Linkedin, Mail } from 'lucide-react';

// Sample project data - in a real app this would come from a CMS or database
const projects = [
  {
    id: 1,
    title: "Urban Photography Series",
    category: "photography",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    description: "A series exploring urban landscapes and architecture"
  },
  {
    id: 2,
    title: "Nature Documentary",
    category: "video",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80",
    description: "Short film documenting wildlife in their natural habitat"
  },
  {
    id: 3,
    title: "Portrait Collection",
    category: "photography",
    image: "https://images.unsplash.com/photo-1501699169021-3759ee435d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    description: "Intimate portrait series capturing human emotions"
  },
  {
    id: 4,
    title: "Commercial Campaign",
    category: "video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    description: "Brand campaign for sustainable fashion"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Jane Smith</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-gray-700 hover:text-black">Work</a>
              <a href="#about" className="text-gray-700 hover:text-black">About</a>
              <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-black"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#work" className="block px-3 py-2 text-gray-700 hover:text-black">Work</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-black">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-black">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Visual Storyteller</h1>
          <p className="text-xl text-gray-600 mb-8">Photography • Videography • Digital Art</p>
          <div className="flex justify-center space-x-4">
            <Camera size={24} className="text-gray-700" />
            <Film size={24} className="text-gray-700" />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mb-12 space-x-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('photography')}
              className={`px-4 py-2 rounded-full ${filter === 'photography' ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              Photography
            </button>
            <button 
              onClick={() => setFilter('video')}
              className={`px-4 py-2 rounded-full ${filter === 'video' ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              Video
            </button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 mb-4">
                With over a decade of experience in visual storytelling, I specialize in creating compelling narratives through photography and videography. My work spans commercial projects, documentaries, and artistic installations.
              </p>
              <p className="text-gray-300">
                Based in New York City, I've collaborated with leading brands and organizations worldwide, bringing their stories to life through my lens.
              </p>
            </div>
            <div className="aspect-square rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" 
                alt="Jane Smith"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Let's Work Together</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="text-gray-700 hover:text-black">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-700 hover:text-black">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-700 hover:text-black">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Jane Smith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;