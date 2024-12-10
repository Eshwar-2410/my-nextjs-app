import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  // Navigation menu items
  const menuItems = [
    'ART DE LA TABLE',
    'MOBILIER',
    'NAPPAGE',
    'MATÉRIEL DE SALLE',
    'CUISINE',
    'BARBECUE',
    'TENTE',
    'CHAUFFAGE',
    'PODIUM - PISTE DE DANSE',
    'SON ET LUMIÈRE',
    'PACKS',
    'CONSOMMABLES'
  ];

  return (
    <header className="flex flex-col bg-white shadow">
      {/* Top Section */}
      <div className="flex items-center px-4 py-4">
        {/* Logo Section */}
        <div className="mr-4">
          <Image 
            src="/logo.png"
            alt="weframetech Logo" 
            width={150} 
            height={75} 
            className="h-16 w-auto"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mr-10">
          <div className="relative bg-gray-100 rounded-lg h-[50px]">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full h-full border-none bg-transparent px-4 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" 
              fill="none" 
              viewBox="0 0 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Inspirations */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <i>💡</i>
            <span className="text-gray-600 text-sm">Inspirations</span>
          </div>

          {/* Favorites */}
          <div className="flex items-center space-x-2 relative cursor-pointer group">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                clipRule="evenodd" 
              />
            </svg>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Mes favoris</span>
              <span className="bg-gray-400 text-white text-xs rounded-full px-2 py-0.5">
                24
              </span>
            </div>
          </div>

          {/* Cart Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span>Panier</span>
          </button>

          {/* Avatar Placeholder */}
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-500" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>

          {/* Language Selection */}
          <div className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-500 group-hover:text-gray-700 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7V3h-7c-.318 0-.632.014-.941.04M10 10l-3 3-3-3" 
                />
              </svg>
              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                FR
              </span>
               <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              > 
               
              </svg>
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute z-10 hidden group-hover:block right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                  <span className="fi fi-fr w-5 h-5"></span>
                  <span>Français</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                  <span className="fi fi-gb w-5 h-5"></span>
                  <span>English</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                  <span className="fi fi-es w-5 h-5"></span>
                  <span>Español</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                  <span className="fi fi-de w-5 h-5"></span>
                  <span>Deutsch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <nav className="flex justify-center">
        <ul className="flex space-x-6 text-sm py-2">
          {menuItems.map((item, index) => (
            <li 
              key={item} 
              className={`
                ${index === 0 
                  ? 'text-blue-500 font-bold border-b-2 border-blue-500' 
                  : 'text-gray-600'}
                cursor-pointer
                hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all duration-200
              `}
            >
              <Link href={`/categories/${item.toLowerCase().replace(' ', '-').replace('-', '-').replace('é', 'e')}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
