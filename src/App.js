import './index.css';

function App() {
  return (
     <div className="container-md mx-auto">
      <header className="flex items-center justify-between py-2 px-4 md:py-4 md:px-6 bg-white shadow-lg">
        <div> 
          <a href="#">
          <h2 className="font-mono font-bold text-3xl">Logo</h2></a>
        </div>
        <div className="sm:hidden">
        <button type="button" className="text-grey-900 hover:text-indigo-600 focus:text-gray-400 sm:hidden">
        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                          <path
                            className="hidden"
                            d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                          />
                          <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        </svg>
        </button>
        </div>
        <div className="hidden sm:block">
          <a href="#" className="text-gray-800 hover:bg-indigo-200 focus:text-indigo-600 py-1 px-2 ml-4 rounded">Register</a>
          <a href="#" className="text-gray-800 hover:bg-indigo-200 focus:text-indigo-600 py-1 px-2 ml-4 rounded">Login</a>
        </div>
       </header>
       <div className="container-lg mt-20 mx-auto">
         <div className="text-center">
           <h3 className="text-semibold text-4xl text-gray-900">Build the <span className="text-indigo-600">future</span></h3>
         </div>
         <div>
         <p className="text-gray-500 mt-10 text-center px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>

       </div>
    </div>

  );
}

export default App;
