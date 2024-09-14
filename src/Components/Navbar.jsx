import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "./LogoutModal";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Articles", href: "/articles", current: false },
];

function Example() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const togglemodal = () => {
    isModalOpen ? closeModal() : openModal();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div>
      <div className="flex justify-between items-center p-4 mb-12">
        <div className="font-spacegroteskbold lg:text-3xl md:text-2xl text-2xl ml-4">
          <Link to="/" className="cursor-pointer">
            EduSync
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8 mr-24">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="mt-2 font-spacegroteskregular cursor-pointer"
              to={item.href}
            >
              {item.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <div className="flex items-center justify-center gap-8">
              <Link
                to="/learning"
                className="mt-2 font-spacegroteskregular cursor-pointer"
              >
                Learning
              </Link>
              <Link
                to="http://localhost:8501"
                className="mt-2 font-spacegroteskregular cursor-pointer"
              >
                Conversation
              </Link>
            </div>
          ) : (
            <></>
          )}
          {isAuthenticated ? (
            <div
              onClick={togglemodal}
              className="absolute right-10 cursor-pointer"
            >
              <img
                className="h-10 w-10 rounded-full"
                src={user.picture}
                alt={user.name}
              />
              {/* <h2>{user.name}</h2>
              <p>{user.email}</p> */}
              <Modal
                className="relative"
                isOpen={isModalOpen}
                onClose={closeModal}
              />
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="border font-spacegroteskregular rounded-md p-2 border-black hover:bg-black hover:text-white"
            >
              Sign Up
            </button>
          )}
        </div>
        <div className="lg:hidden mr-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md border"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-10">
          <div
            ref={sidebarRef}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-20 p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="font-spacegroteskbold text-2xl">Awaaz</div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md border"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-lg font-spacegroteskregular text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.name}
                </a>
              ))}
              <button className="border rounded-md p-2 font-spacegroteskregular border-black hover:bg-black hover:text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Example;
