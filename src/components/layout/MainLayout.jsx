import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NewsBanner from '../common/NewsBanner';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NewsBanner />
      <Header />
      <main className="flex-grow px-4 md:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;