import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Modal = ({ isOpen, onClose }) => {
  const { logout } = useAuth0();
  if (!isOpen) return null;
  return (
    <div
      className="absolute right-0 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Modal;
