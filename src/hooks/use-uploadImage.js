import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../utils/database-config";

const UseUploadImage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [eror, setError] = useState(null);

  const uploadImage = async (imageObj, path) => {
    const imageRef = ref(storage, path);
    console.log(path);
    setIsLoading(true);
    try {
      await uploadBytes(imageRef, imageObj);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };
  return {
    uploadImage,
    isLoading,
    eror,
  };
};
export default UseUploadImage;
