import React from 'react';
import './styles/tailwind.css';

function App() {
  return (
    <body className="h-full container mx-auto sm:w-8/12 lg:w-10/12 xl:w-8/12">
      <header>
        <nav className="flex items-center justify-between py-2 px-4 md:py-4 md:px-6 bg-white">
        <div className="font-mono font-bold text-3xl">
          <a href="/">Logo</a>
          </div>
          <div className="sm:hidden">
            <button type="button" className="text-grey-900 hover:text-indigo-600 focus:text-gray-400">
              <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden sm:block">
            <a href="/" className="text-gray-800 hover:bg-indigo-200 focus:text-indigo-600 py-1 px-2 ml-4 rounded">Register</a>
            <a href="/" className="text-gray-800 hover:bg-indigo-200 focus:text-indigo-600 py-1 px-2 ml-4 rounded">Login</a>
          </div>
        </nav>
      </header>
      <div className=" lg:flex justify-center items-center bg-white container-lg mt-20 mx-auto">
        <div className="text-center lg:w-1/3">
          <div className="flex-column">
            <h3 className="text-semibold text-4xl text-gray-900">Build the <span className="text-indigo-600">future</span></h3>
            <p className="text-gray-500 mt-10 text-center px-8 sm:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="flex justify-center text-center mt-10">
                  <button type="button" className="btn hover:bg-indigo-200 hover:text-black focus:border-gray-900 bg-black text-gray-100 mr-1">Get started</button>
                  <button type="button" className="btn hover:bg-indigo-200 hover:text-black focus:border-gray-900 bg-gray-200 text-black ml-1">Learn more</button>
            </div>
           </div>
        </div>
        <div className="h-full hidden lg:block lg:w-2/3 bg-white">
          <img className="w-7/12 min-h-full object-center" src="/img/hero-image-tailwindapp_500x539.jpg" alt="close up of computer"/>
        </div>
       </div>
    </body>
  );
}

export default App;
