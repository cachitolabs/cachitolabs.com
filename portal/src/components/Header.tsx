import { useState } from 'react';
import { Menu, Instagram, Youtube, Github } from 'lucide-react';
import Sidebar from './Sidebar';

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content Container */}
      <div 
        className="transition-all duration-300 ease-in-out"
        style={{ marginLeft: isSidebarOpen ? '280px' : '0' }}
      >
        <header className="bg-black text-white px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Hamburger */}
            <div className="flex items-center space-x-6">
              <button 
                id="hamburger-button"
                onClick={toggleSidebar}
                className="p-1 hover:bg-gray-800 rounded transition-colors"
                aria-label="Toggle sidebar"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {/* Instagram */}
              <a 
                href="#" 
                className="p-2 hover:bg-gray-800 rounded transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              {/* TikTok */}
              <a 
                href="#" 
                className="p-2 hover:bg-gray-800 rounded transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a 
                href="#" 
                className="p-2 hover:bg-gray-800 rounded transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              {/* GitHub */}
              <a 
                href="#" 
                className="p-2 hover:bg-gray-800 rounded transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </header>
      
        {/* Header Image */}
        <div className="w-full h-48 overflow-hidden flex justify-center items-center">
          <img 
            src="/cachitolabs_website_banner.png" 
            className="max-w-none"
            style={{
              height: '800px',
              width: 'auto',
            }}
          />
        </div>

        {/* Page Content */}
        <main>
          {children}
        </main>
      </div>
    </>
  );
}