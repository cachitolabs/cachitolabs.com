import { Instagram, Youtube, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="text-white py-8 mt-auto"
      style={{
        backgroundImage: "url('/cachitolabs_website_footer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col items-center space-y-6">

          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail size={20} />
            <a 
              href="mailto:contact@cachitolabs.com"
              className="text-lg hover:text-gray-200 transition-colors"
            >
              contact@cachitolabs.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            {/* Instagram */}
            <a 
              href="#" 
              className="p-2 hover:bg-white/20 rounded transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            
            {/* TikTok */}
            <a 
              href="#" 
              className="p-2 hover:bg-white/20 rounded transition-colors"
              aria-label="TikTok"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.896 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a 
              href="#" 
              className="p-2 hover:bg-white/20 rounded transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            
            {/* GitHub */}
            <a 
              href="#" 
              className="p-2 hover:bg-white/20 rounded transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm opacity-80">
            <p>&copy; 2025 Cachito Labs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}