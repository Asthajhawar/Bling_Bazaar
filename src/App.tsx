import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './config/business';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ivory">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>

        {/* Floating WhatsApp button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 pulse-ring"
          aria-label="Order on WhatsApp"
        >
          <MessageCircle size={26} className="text-white" />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
