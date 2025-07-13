const NotFound = () => (
  <div className="h-screen flex items-center justify-center flex-col text-center">
    <h1 className="text-6xl font-bold text-blue-600">404</h1>
    <p className="text-xl mt-2">Oops! Page not found.</p>
    <a href="/" className="mt-4 text-blue-500 underline">Go back home</a>
  </div>
);

export default NotFound;
