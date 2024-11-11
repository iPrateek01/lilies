import { signOut, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../../firebase/firebase"; // Firebase initialization file
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimateRoutes from "../AnimateRoutes";

function UserProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null); // Track the authenticated user
  const [photoURL, setPhotoURL] = useState(null); // Track the photo URL state
  const [file, setFile] = useState(null); // Track the selected file for upload
  const [placeholderURL, setPlaceholderURL] = useState(""); // Track the placeholder URL

  // Fetch the authenticated user state and the placeholder image
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setPhotoURL(currentUser.photoURL || placeholderURL); // Update photo URL when the user changes
      }
    });

    // Fetch the placeholder image from Firebase Storage
    const fetchPlaceholderImage = async () => {
      const placeholderRef = ref(storage, 'profilePictures/placeholder.webp');
      try {
        const url = await getDownloadURL(placeholderRef);
        setPlaceholderURL(url);
      } catch (error) {
        console.error("Error fetching placeholder image:", error);
      }
    };

    fetchPlaceholderImage();

    return () => unsubscribe();
  }, [placeholderURL]); // Runs when placeholderURL is available or changed

  // Sign out the user
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to homepage after sign-out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Handle file upload to Firebase Storage
  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const fileRef = ref(storage, `profilePictures/${user.uid}`);
    try {
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);

      // Update the user's profile photo URL in Firebase Authentication
      await updateProfile(user, { photoURL: downloadURL });
      setPhotoURL(downloadURL); // Update the local state to show the new photo

      console.log("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Handle removing the user's profile photo and set it back to placeholder
  const handleRemovePhoto = async () => {
    try {
      // Update Firebase Authentication photoURL to the placeholder image URL
      await updateProfile(user, { photoURL: placeholderURL });
      setPhotoURL(placeholderURL); // Reset the local photo URL state to the placeholder
      console.log("Profile picture removed successfully and set to placeholder!");
    } catch (error) {
      console.error("Error removing profile picture:", error);
    }
  };

  if (!user || !placeholderURL) {
    return <div><AnimateRoutes /></div>; // Show loading state until user and placeholder URL are available
  }

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-evenly">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="avatar">
          <div className="w-56 h-auto rounded-xl">
            <img
              className="w-full h-full object-cover"
              src={photoURL || placeholderURL}
              alt="Profile"
            />
          </div>
        </div>

        <label htmlFor="profilePicture">
          <h3 className="text-black text-center">Upload Profile Picture:</h3>
          <input
            type="file"
            id="profilePicture"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full max-w-xs text-white bg-customGreen"
          />
        </label>
        <button
          onClick={handleUpload}
          className="btn bg-customGreen text-white mt-2"
        >
          Update Profile Picture
        </button>
        {photoURL !== placeholderURL && (
          <button
            onClick={handleRemovePhoto}
            className="btn bg-customGreen text-white mt-2"
          >
            Remove Profile Picture
          </button>
        )}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-5 w-full ml-24 sm:ml-0">
        <h2 className="text-black">Full Name:</h2>
        <input
          type="text"
          value={user.displayName || ""}
          className="input input-bordered w-full max-w-xs bg-white placeholder-black"
          readOnly
        />
      </div>

      <div className="flex flex-row flex-wrap justify-start sm:justify-center items-center gap-5 w-full ml-24 sm:ml-0">
        <h2 className="text-black mr-9">Email:</h2>
        <input
          type="text"
          value={user.email || ""}
          className="input input-bordered w-full max-w-xs bg-white placeholder-black"
          readOnly
        />
      </div>

      <div>
        <button
          onClick={handleSignOut}
          className="btn bg-red-700 border-red-700 text-white shadow-xl"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
