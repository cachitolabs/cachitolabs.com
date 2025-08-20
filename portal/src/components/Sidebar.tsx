import { useEffect } from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger-button');
      
      if (isOpen && 
          sidebar && 
          !sidebar.contains(event.target as Node) &&
          hamburger &&
          !hamburger.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div 
      id="sidebar"
      className={`bg-black text-white h-screen fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
      }`}
      style={{ width: '280px' }}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <h2 className="text-xl font-bold text-white">cachito labs</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-700 rounded transition-colors text-white"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <a 
              href="#/" 
              className="block py-3 px-4 text-lg text-white hover:bg-gray-700 rounded transition-colors"
              onClick={onClose}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#/guides" 
              className="block py-3 px-4 text-lg text-white hover:bg-gray-700 rounded transition-colors"
              onClick={onClose}
            >
              Guides
            </a>
          </li>
          <li>
            <a 
              href="#/recommendations" 
              className="block py-3 px-4 text-lg text-white hover:bg-gray-700 rounded transition-colors"
              onClick={onClose}
            >
              Recommended Products
            </a>
          </li>
          <li>
            <a 
              href="#/buymeacoffee" 
              className="block py-3 px-4 text-lg text-white hover:bg-gray-700 rounded transition-colors"
              onClick={onClose}
            >
              Buy Me a Coffee
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}