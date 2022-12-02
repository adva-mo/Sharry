import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../utils/database-config";
const UseUploadImage = (path, imageObj) => {
  const [isLoading, setIsLoading] = useState(false);
  const [eror, setError] = useState(null);
  console.log(path);
  console.log(imageObj);

  const imageRef = ref(
    storage,
    // `recipes-pics/${currentRecipe.id}/${imageUpload.name + v4()}`
    path
  );

  const uploadImage = async () => {
    // if (imageUpload === null) return;
    setIsLoading(true);
    try {
      await uploadBytes(imageRef, imageObj.name);
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
