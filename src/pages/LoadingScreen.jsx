

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center">
        {/* Animated Image */}
        <img
          src="/assets/lilies.svg"
          alt="Loading"
          className="animate-bounce h-32 w-32 mx-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
        />
        {/* Stylish Loading Text */}
        <h2 className="text-2xl mt-6 font-semibold text-white animate-pulse">Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
