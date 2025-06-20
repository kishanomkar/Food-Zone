const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-yellow-100 via-pink-100 via-orange-100 to-red-200">
      <div className="relative">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-yellow-400 border-pink-400 border-opacity-80 shadow-lg"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="block h-10 w-10 bg-gradient-to-tr from-yellow-400 via-orange-400 to-pink-400 rounded-full shadow-inner animate-pulse"></span>
        </div>
      </div>
      <span className="mt-8 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 via-pink-500 to-red-500 animate-bounce transition-colors duration-300 hover:from-red-600 hover:to-yellow-600 cursor-pointer">
        Loading, please wait...
      </span>
    </div>
  );
};

export default Loader;
