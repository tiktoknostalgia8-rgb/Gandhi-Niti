import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { GandhaGuruChat } from './components/GandhaGuruChat';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { ScentQuiz } from './pages/ScentQuiz';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { AboutUs } from './pages/AboutUs';
import { SaptangaPage } from './pages/SaptangaPage';
import { BusinessModelPage } from './pages/BusinessModelPage';
import { CorporateGiftingPage } from './pages/CorporateGiftingPage';
import { BatchPassportPage } from './pages/BatchPassportPage';
import { ContactPage } from './pages/ContactPage';
import { ReturnsPage, PrivacyPage, TermsPage } from './pages/LegalPages';
import { QAPage } from './pages/QAPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    return window.location.hash || '#/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Parse path and params
  const cleanHash = currentHash.replace(/^#/, '') || '/';
  const pathWithoutQuery = cleanHash.split('?')[0];

  const renderCurrentPage = () => {
    if (pathWithoutQuery === '/' || pathWithoutQuery === '') {
      return <Home />;
    }
    if (pathWithoutQuery === '/shop') {
      return <Shop />;
    }
    if (pathWithoutQuery.startsWith('/product/')) {
      const productId = pathWithoutQuery.replace('/product/', '');
      return <ProductDetail productId={productId} />;
    }
    if (pathWithoutQuery === '/quiz') {
      return <ScentQuiz />;
    }
    if (pathWithoutQuery === '/cart') {
      return <CartPage />;
    }
    if (pathWithoutQuery === '/checkout') {
      return <CheckoutPage />;
    }
    if (pathWithoutQuery === '/order-confirmation') {
      return <OrderConfirmationPage />;
    }
    if (pathWithoutQuery === '/about') {
      return <AboutUs />;
    }
    if (pathWithoutQuery === '/saptanga') {
      return <SaptangaPage />;
    }
    if (pathWithoutQuery === '/business-model') {
      return <BusinessModelPage />;
    }
    if (pathWithoutQuery === '/gifting') {
      return <CorporateGiftingPage />;
    }
    if (pathWithoutQuery === '/batch-passport') {
      return <BatchPassportPage />;
    }
    if (pathWithoutQuery === '/contact') {
      return <ContactPage />;
    }
    if (pathWithoutQuery === '/returns') {
      return <ReturnsPage />;
    }
    if (pathWithoutQuery === '/privacy') {
      return <PrivacyPage />;
    }
    if (pathWithoutQuery === '/terms') {
      return <TermsPage />;
    }
    if (pathWithoutQuery === '/qa') {
      return <QAPage />;
    }

    return <NotFoundPage />;
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col justify-between bg-[#F1E6CC] text-[#2E1B0F]">
        {/* Navigation Bar */}
        <Navbar currentPath={pathWithoutQuery} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          {renderCurrentPage()}
        </main>

        {/* Royal Court Footer */}
        <Footer />

        {/* Global Cart Slide-Over Drawer */}
        <CartDrawer />

        {/* Gandha Guru Craft & Policy FAQ Widget */}
        <GandhaGuruChat />
      </div>
    </CartProvider>
  );
}
