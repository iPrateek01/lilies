import { getAuth, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-white flex flex-col items-center justify-evenly mx-4">
        <h1 className="text-gray-800 font-semibold text-3xl">Your Profile</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            className="mask mask-squircle"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
          />
          <label htmlFor="profilePicture" className="">
            <h3 className="text-black text-center">Upload Profile Picture:</h3>
            <input
              type="file"
              id="profilePicture"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className=" flex flex-row flex-wrap items-center justify-start sm:justify-center gap-5 w-full ml-14 sm:ml-0">
          <h2 className="text-black">Full Name :</h2>
          <input
            type="text"
            placeholder="#"
            className="input input-bordered w-full max-w-xs bg-white placeholder-black"
            readOnly
          />
        </div>
        <div className=" flex flex-row flex-wrap justify-start sm:justify-center items-center gap-5 w-full ml-14 sm:ml-0">
          <h2 className="text-black mr-9">Email :</h2>
          <input
            type="text"
            placeholder="#"
            className="input input-bordered w-full max-w-xs bg-white placeholder-black"
            readOnly
          />
        </div>
        <div className=" flex flex-row flex-wrap justify-start sm:justify-center items-center gap-5 w-full ml-14 sm:ml-0">
          <h2 className="text-black">Password :</h2>
          <input
            type="text"
            placeholder="#"
            className="input input-bordered w-full max-w-xs bg-white placeholder-black"
            readOnly
          />
        </div>
        <div>
          <button
            onClick={handleSignOut}
            className="btn bg-red-700 border-red-700 text-white shadow-xl
"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
