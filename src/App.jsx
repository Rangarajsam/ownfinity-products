import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto mt-[93px] h-[calc(100vh - 150px)] overflow-auto">
        {/* remote application placeholder */}
      </main>
      <Footer />
    </>
  )
}

export default App
