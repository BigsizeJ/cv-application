import React, { useEffect, useState } from "react";

const Left = () => {
  const [preview, setPreview] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(String(reader.result));
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div className="left">
      {preview ? (
        <img src={preview} className="image"></img>
      ) : (
        <label htmlFor="upload-image" className="image">
          Add Image
        </label>
      )}
      <input
        type="file"
        id="upload-image"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file && file.type.slice(0, 5) === "image") {
            setImage(file);
          } else {
            setImage(null);
          }
        }}
      ></input>
    </div>
  );
};

export default Left;
