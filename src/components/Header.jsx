import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lms_logo.jpg";
import { ImLibrary } from "react-icons/im";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { SiCompilerexplorer } from "react-icons/si";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-17.5 relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 border border-b-gray-300 shadow-md hover:shadow-xl transition-all">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="BookBank logo" height="auto" width="110px" />
      </Link>

      {/* Desktop Menu */}
      <ul className="text-gray-500 md:flex hidden text-lg items-center gap-10 font-semibold">
        <li>
          <Link
            to="/"
            className="text-gray-500 flex gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            <ImLibrary className="mt-1" />Home
          </Link>
        </li>
        <li>
          <Link
            to="/books"
            className="text-gray-500 flex gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            <MdOutlineLocalLibrary className="mt-1"  />Library
          </Link>
        </li>
        <li>
          <Link
            to="/add-book"
            className="text-gray-500 flex gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            <FaBookBookmark className="mt-1" />Add Book
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <Link
        to="/books/Fiction"
        className="text-gray-500 flex gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        <SiCompilerexplorer className="mt-1"  />Explore Library
      </Link>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#fff"
        >
          <path d="M3 7h24M3 15h24M3 23h24" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-17.5 left-0 w-full bg-linear-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
          <ul className="flex flex-col items-center justify-center space-y-4 text-white text-lg">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" onClick={() => setMenuOpen(false)}>
                Browse Books
              </Link>
            </li>
            <li>
              <Link to="/add-book" onClick={() => setMenuOpen(false)}>
                Add Book
              </Link>
            </li>
          </ul>

          <Link
            to="/books/Fiction"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-gray-700 mt-6 mr-auto ml-auto  text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full flex items-center justify-center"
          >
            Explore Library
          </Link>
        </div>
      )}
    </nav>
  );
}