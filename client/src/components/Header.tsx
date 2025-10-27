import React from "react";

interface HeaderProps {
  user: any;
  onLogin: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide cursor-pointer">
          ShopEase
        </h1>

        {/* Navigation (Optional future links) */}
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Products
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-9 h-9 rounded-full border border-gray-300 shadow-sm"
              />
              <span className="text-gray-700 font-medium hidden sm:block">
                {user.displayName.split(" ")[0]}
              </span>
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={onLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Login with Google
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
