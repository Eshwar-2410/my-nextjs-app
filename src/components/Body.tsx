"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCard {
  id: number;
  title: string;
  price: number;
  image: string;
  thumbnail: string;
  category: string;
  ref?: string;
  pieces?: number;
  pricePerPiece?: string;
}

interface BodyProps {
  // Add any props if needed
}

export default function Body({}: BodyProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeIdx, setActiveIdx] = useState(0);
  const [email, setEmail]=useState("");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [productQuantities, setProductQuantities] = useState<{[key: number]: number}>({});
  const [openDetails, setOpenDetails] = useState({
    livraisons: false,
    questions: false
  });

  useEffect(() => {
    // Example: Any client-specific logic can be placed here
  }, []);

  const thumbnails: string[] = [
    "/Thumbnailed.png",
    "/Thumbnailed.png",
    "/Thumbnailed.png",
    "/Thumbnailed.png",
  ];

  const mainImage: string = "/main.png";

  const similarProducts: ProductCard[] = [
    { 
      id: 1, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    },
    { 
      id: 2, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    },
    { 
      id: 3, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    },
    { 
      id: 4, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    },
    { 
      id: 5, 
      title: "Titles", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE" ,
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    },
    { 
      id: 6, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    },
    { 
      id: 7, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce" 
    },
  ];

  const interestedProducts: ProductCard[] = [
    { 
      id: 8, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    },
    { 
      id: 9, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    },
    { 
      id: 10, 
      title: "Title", 
      price: 0, 
      image: "/Thumbnailed.png", 
      thumbnail: "/Thumbnailed.png",
      category: "ART DE LA TABLE",
      ref: "REF : VABGN5",
      pieces: 20,
      pricePerPiece: "0,35€/Pièce"
    }
  ];

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const toggleDetails = (section: string) => {
    setOpenDetails(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleQuantityChange = (productId: number, change: number) => {
    setProductQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change)
    }));
  };

  // const [scrollPosition, setScrollPosition] = useState(0);
  const productContainerRef = useRef<HTMLDivElement>(null);

  const scrollProducts = (direction: 'left' | 'right') => {
    if (productContainerRef.current) {
      const container = productContainerRef.current;
      const scrollAmount = container.clientWidth; 
      
      if (direction === 'right') {
        container.scrollBy({ 
          left: scrollAmount, 
          behavior: 'smooth' 
        });
      } else {
        container.scrollBy({ 
          left: -scrollAmount, 
          behavior: 'smooth' 
        });
      }
    }
  };

 
  return (
    <div className="container mx-auto p-8 bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>{" "}
        <span className="mx-2 font-extrabold text-gray-400">.</span>
        <span className="font-bold text-gray-400">Art de La Table</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section (Product Images) */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm min-h-[600px]">
          <div className="flex flex-col lg:flex-row gap-4 h-full">
            <div className="flex lg:flex-col gap-2">
              {thumbnails.map((image, idx) => (
                <div
                  key={idx}
                  className={`w-14 h-14 cursor-pointer border-2 ${
                    activeIdx === idx ? "border-blue-500" : "border-gray-200"
                  } rounded-lg overflow-hidden bg-white`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <Image
                    src={image}
                    alt={`Product view ${idx + 1}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1">
              <div className="aspect-square rounded-xl overflow-hidden bg-white h-full flex items-center justify-center">
                <Image
                  src={mainImage}
                  alt="Professional Heating Device"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => { e.currentTarget.src = '/fallback.png'; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Product Details) */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm min-h-[600px]">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold">
                Cheese – appareil à raclette 1/2 roue
              </h1>
              <button className="text-red-500">
              <svg className="w-16 h-16 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
            
            <div className="flex items-center mt-4">
              <span className="text-2xl font-bold">39,50€</span>
              <span className="text-gray-500 ml-2">/piece</span>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                </svg>
                <span>20cm</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                </svg>
                <span>50cm</span>
              </div>
              <div className="text-gray-400">REF: VA8GN1</div>
            </div>

            <div className="mt-4 flex-grow">
              <p className="text-gray-600">
                Location appareil à raclette – Raclette traditionnelle 1/2 roue<br/>
                Réglable en hauteur<br/>
                Appareil à raclette professionnel<br/>
                Boîtier de chauffe horizontal réglable en hauteur
              </p>
            </div>

            <div className="space-y-4 mt-auto">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={decrementQuantity}
                  className="px-2 py-1 border rounded-l-md border-gray-300 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-10 text-center border-y border-gray-300 py-1"
                />
                <button
                  type="button"
                  onClick={incrementQuantity}
                  className="px-2 py-1 border rounded-r-md border-gray-300 hover:bg-gray-100"
                >
                  +
                </button>
                <button 
                  type="button"
                  className="bg-cyan-500 text-white px-6 py-2 rounded-lg ml-2 flex-grow"
                >
                  AJOUTER AU PANIER
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Livraisons/Questions and Description Sections */}
      <div className="flex gap-12 mt-6">
        {/* Description Section */}
        <div className="flex-1 bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-2" style={{color: 'rgba(17,25,40,1)'}}>
            Description produit
          </h2>
          <p className="text-xs" style={{color: 'rgba(156,156,156,1)'}}>
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".
          </p>
        </div>

        {/* Livraisons and Questions Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow-sm">
          <div className="mb-4 pd-bottom">
            <div 
              className="cursor-pointer text-gray-700 hover:text-gray-900 flex justify-between items-center"
              onClick={() => toggleDetails('livraisons')}
            >
              LIVRAISONS
              <span>{openDetails.livraisons ? '▲' : '▼'}</span>
            </div>
            {openDetails.livraisons && (
              <p className="text-gray-600 pl-4 mt-2">
                Delivery information and options will appear here.
              </p>
            )}
          </div>
          <div className="mt-8">
            <div 
              className="cursor-pointer text-gray-700 hover:text-gray-900 flex justify-between items-center"
              onClick={() => toggleDetails('questions')}
            >
              QUESTIONS
              <span>{openDetails.questions ? '▲' : '▼'}</span>
            </div>
           { openDetails.questions && ( 
               <p className="text-gray-600 pl-4 mt-2"> 
                 Frequently asked questions will be shown here. 
               </p> 
             )}
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-12 relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Articles similaires</h2>
          <a href="#" className="text-gray-600 hover:text-gray-900">VOIR TOUTE LA COLLECTION</a>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={() => scrollProducts('left')}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-100 rounded-lg p-2 hover:bg-blue-200 transition-colors"
          suppressHydrationWarning
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => scrollProducts('right')}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-100 rounded-lg p-2 hover:bg-blue-200 transition-colors"
          suppressHydrationWarning
        >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Scrollable Product Container */}
        <div 
          ref={productContainerRef}
          className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth"
          style={{ 
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-72 group relative bg-white rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
              style={{ scrollSnapAlign: 'start' }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                {/* Heart Icon */}
                <button className="absolute top-4 left-4 z-10 text-gray-400 hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Category Badge */}
                <span className="absolute top-4 right-4 z-10 bg-white px-3 py-1 text-sm">
                  {product.category}
                </span>

                {/* Product Image */}
                <div className="aspect-square">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl">{product.title}</h3>
                  <span className="text-xl">{product.price}€</span>
                </div>
                <div className="text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>{product.ref}</span>
                    <span>{product.pieces} pièces</span>
                  </div>
                  <div>{product.pricePerPiece}</div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-x-0 bottom-0 bg-white p-4 transition-all duration-300 transform ${
                  hoveredProduct === product.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-full opacity-0'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                        suppressHydrationWarning
                      >
                        -
                      </button>
                      <span className="w-8 text-center">
                        {productQuantities[product.id] || 1}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                        suppressHydrationWarning
                      >
                        +
                      </button>
                    </div>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                      suppressHydrationWarning
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* Ces produits pourraient vous intéresser Section */}
      <div className="mt-12 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Ces produits pourraient vous intéresser</h2>
        </div>
        
        <div 
          ref={productContainerRef} 
          className="flex w-full space-x-4 overflow-x-auto"
        >
          {interestedProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-1 min-w-[calc(33.333%-1rem)] w-full group relative transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-lg p-4"
            >
              <div className="relative">
                <button className="absolute top-4 left-4 z-10 text-gray-400 hover:text-pink-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <span className="absolute top-4 right-4 bg-white px-3 py-1 text-sm">
                  {product.category}
                </span>

                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  layout="responsive"
                  width={288}
                  height={288}
                  className="object-cover"
                />
              </div>

              <div className="p-4 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <span className="text-lg font-semibold">{product.price}€</span>
                </div>
                
                <div className="text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>{product.ref}</span>
                    <span>{product.pieces} pièces</span>
                  </div>
                  <div>{product.pricePerPiece}</div>
                </div>

                <div className="hidden group-hover:block absolute inset-x-0 bottom-0 bg-white p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="w-8 h-8 border rounded-full"
                        suppressHydrationWarning
                      >
                        -
                      </button>
                      <span>{productQuantities[product.id] || 1}</span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="w-8 h-8 border rounded-full"
                        suppressHydrationWarning
                      >
                        +
                      </button>
                    </div>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                      suppressHydrationWarning
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* On s'occupe de tout Section */}
      <div className="mt-12 py-16 w-full" style={{ background: 'linear-gradient(to bottom, #fff5f7, #ffffff)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">On s'occupe de <span className="text-cyan-500">tout</span></h2>
            <p className="text-gray-500">Office ipsum you must be muted. It meeting commitment busy pain.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Livraison & Reprise</h3>
              <p className="text-gray-500">Selon vos besoins</p>
            </div>
            
            <div className="hidden lg:block h-px w-32 bg-gray-300 absolute top-1/2 left-1/4 -translate-y-1/2 -ml-11"></div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Nettoyage</h3>
              <p className="text-gray-500">Selon vos besoins</p>
            </div>

            <div className="hidden lg:block h-px w-32 bg-gray-300 absolute top-1/2 left-1/2 -translate-y-1/2 -ml-16"></div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Commande Illimitée</h3>
              <p className="text-gray-500">Tout est possible</p>
            </div>

            <div className="hidden lg:block h-px w-32 bg-gray-300 absolute top-1/2 left-3/4 -translate-y-1/2 -ml-16"></div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
              <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                     strokeWidth="1.5"
                   strokeLinecap="round"
  strokeLinejoin="round"
  className="icon-mini-van"
  width="64"
  height="64"
>
  <path
    d="M3 12h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"
  />
  <path
    d="M5 12V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"
  />
  <path
    d="M17 9h4l1 3"
  />
</svg>

              </div>
              <h3 className="text-xl font-medium mb-2">Transport & Enlevement</h3>
              <p className="text-gray-500">On S'occupe de tout</p>
            </div>
            

            
        </div>
      </div>
      
      {/* Nouvelle Section */}
      <div className="section w-full h-auto py-8 sm:py-12 mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            <div className="w-full lg:w-1/2">
              <Image 
                src="/so.jpg" 
                alt="Service Description" 
                width={703} 
                height={300} 
                className="rounded-lg shadow-lg object-cover w-full h-[300px]"
              />
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 border border-gray-100 rounded-lg" style={{ background: 'linear-gradient(to bottom,#fff5f7, #ffffff)' }}>
              <h2 className="text-3xl font-semibold">S'inscrire & économiser <span className="text-cyan-200">10%</span></h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail synergy highlights lunch. Company another pushback items dear or any.
              </p>
              <div className="flex items-center">
              <input
                  type='email'
                  placeholder='john@doe.com'
                  value={email} // Controlled input
                  onChange={(e) => setEmail(e.target.value)} // Handle input changes
                  className='border border-gray-300 rounded-lg px-4 py-2 h-12 mr-2'
                  />
                <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors h-12">
                  S'INSCRIRE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className=''></div>
      <footer className="bg-white py-4 mt-16 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Logo Section */}
            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="mb-4"
              />
            </div>

            {/* INFOS PRATIQUES */}
            <div>
              <h3 className="font-semibold mb-2">INFOS PRATIQUES</h3>
              <ul className="space-y-0">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">À propos</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Livraisons & Reprises</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mode d'emploi</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">F.A.Q</Link></li>
              </ul>
            </div>

            {/* LÉGAL */}
            <div>
              <h3 className="font-semibold mb-2">LÉGAL</h3>
              <ul className="space-y-0">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mentions légales</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">CGU</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">CGV</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Politique de confidentialité</Link></li>
              </ul>
            </div>

            {/* MON COMPTE */}
            <div>
              <h3 className="font-semibold mb-2">MON COMPTE</h3>
              <ul className="space-y-0">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Accéder à mon compte</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Ma liste d'envie</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Créer un compte</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mot de passe oublié</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-end mt-8 space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}