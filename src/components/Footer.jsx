import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rose-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-sm">
                E
              </div>
              <span className="font-medium">Educare</span>
            </div>
          </div>
          
          {/* Navigation Section */}
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Curriculum</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div>
            <h3 className="font-medium mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@educare.com" className="hover:underline">info@educare.com</a></li>
              <li><a href="#" className="hover:underline">info@educare.com</a></li>
              <li className="flex items-center space-x-1">
                <Mail size={14} />
                <a href="#" className="hover:underline">+971 5456</a>
              </li>
              <li className="flex items-center space-x-1">
                <Phone size={14} />
                <a href="tel:+97155442890" className="hover:underline">+971 5544 2890</a>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="hover:text-rose-200">
                <div className="w-6 h-6 rounded border border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="hover:text-rose-200">
                <div className="w-6 h-6 rounded border border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </a>
              <a href="#" className="hover:text-rose-200">
                <div className="w-6 h-6 rounded border border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Office Address Section */}
          <div>
            <h3 className="font-medium mb-4">Office Address</h3>
            <p className="text-sm mb-1">Educare Education Center</p>
            <p className="text-sm mb-1">Building 45, Al Said Street,</p>
            <p className="text-sm mb-4">Doha, Qatar</p>
            <a href="#" className="text-sm underline hover:text-rose-200">View on Map</a>
            <div className="mt-4">
              <img src="/api/placeholder/160/120" alt="Qatar Map" className="w-40 h-24" />
              <div className="relative bottom-12 left-20">
                <MapPin size={20} className="text-rose-600 bg-white rounded-full p-1" />
              </div>
            </div>  
          </div>
        </div>
      </div>
      
      <div className="border-t border-rose-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-between items-center text-xs text-rose-200">
          <p>© 2024 educare</p>
          <p>Designed by Novinsen Technologies</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}