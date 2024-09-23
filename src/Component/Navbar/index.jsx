import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import recipe from "./images/Recipe.jpg";
import { GlobalContext } from "../../Context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="w-full rounded-lg shadow-lg bg-white "
      >
        <div
          className="flex justify-between items-center py-4 px-0 flex-col lg:flex-row gap-5 lg:gap-0
        "
        >
          <div>
            <NavLink to="/">
              <img
                src={recipe}
                alt="Recipe Logo"
                className="rounded-2xl cursor-pointer object-cover transition duration-500 hover:scale-110 w-[100px] h-[100px] m-[-15]"
              />
            </NavLink>
          </div>
          <form className="flex-grow lg:max-w-md" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchParam}
              onChange={(event) => setSearchParam(event.target.value)}
              placeholder="Enter Items..."
              className="p-3 px-4 rounded-full outline-none shadow-lg focus:shadow-xl transition duration-200 bg-white text-black "
            />
          </form>
          <div className="hidden lg:block">
            <ul className="flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-semibold rounded-md px-3 py-2 transition duration-300  ${
                      isActive ? "bg-gray-200" : "hover:bg-gray-200 "
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Favorite"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 transition duration-300 font-semibold ${
                      isActive ? "bg-gray-200" : "hover:bg-gray-200"
                    }`
                  }
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white">
            <ul className="flex flex-col gap-2 px-4 py-2">
              <li>
                <NavLink
                  to="/"
                  className="block rounded-md p-2 text-black hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Favorite"
                  className="block rounded-md p-2 text-black hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
        
        )}
      </nav>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 rounded-full bg-gray-800 text-white shadow-lg transition duration-300 hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      )}
    </>
  );
}
