import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    // Optional: send error to analytics service here
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-light to-accent-light">
      <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-4 text-lg text-gray-600">Oops! The page you’re looking for doesn’t exist.</p>
        
        <Link
          to="/"
          className="inline-block px-6 py-3 mt-4 text-white bg-primary rounded-lg shadow-md hover:bg-primary/90 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
