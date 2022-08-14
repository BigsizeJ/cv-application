import React, { useState, useEffect } from "react";

import emailIcon from "../../asset/email.png";
import phoneIcon from "../../asset/phone.png";
import addressIcon from "../../asset/address.png";

const Information = () => {
  const [preview, setPreview] = useState();
  const [image, setImage] = useState();

  const [email, setEmail] = useState({ value: "", show: false });
  const [phone, setPhone] = useState({ value: "", show: false });
  const [address, setAddress] = useState({ value: "", show: false });

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

    return () => {};
  }, [image]);

  const removeFocus = () => {
    setEmail({ ...email, show: false });
    setPhone({ ...phone, show: false });
    setAddress({ ...address, show: false });
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.classList.contains("input")) {
        removeFocus();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [email, phone, address]);

  const handleClick = (e) => {
    removeFocus();
    if (e.target.classList.contains("email"))
      setEmail({ ...email, show: true });
    if (e.target.classList.contains("phone"))
      setPhone({ ...phone, show: true });
    if (e.target.classList.contains("address"))
      setAddress({ ...address, show: true });
  };

  return (
    <>
      {preview ? (
        <img src={preview} className="image" alt="preview"></img>
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
      <div className="info">
        <label>
          <img src={emailIcon} className="icon" alt="icon"></img>
          {email.show ? (
            <input
              type="text"
              className="input"
              value={email.value}
              onChange={(e) => {
                setEmail({ ...email, value: e.target.value });
              }}
            ></input>
          ) : (
            <p className="input email" onClick={handleClick}>
              {email.value.length <= 0 ? "Email" : email.value}
            </p>
          )}
        </label>

        <label>
          <img src={phoneIcon} className="icon" alt="icon"></img>
          {phone.show ? (
            <input
              type="text"
              className="input"
              value={phone.value}
              onChange={(e) => {
                setPhone({ ...phone, value: e.target.value });
              }}
            ></input>
          ) : (
            <p className="input phone" onClick={handleClick}>
              {phone.value.length <= 0 ? "Phone number" : phone.value}
            </p>
          )}
        </label>

        <label>
          <img src={addressIcon} className="icon" alt="icon"></img>
          {address.show ? (
            <input
              type="text"
              className="input"
              value={address.value}
              onChange={(e) => {
                setAddress({ ...address, value: e.target.value });
              }}
            ></input>
          ) : (
            <p className="input address" onClick={handleClick}>
              {address.value.length <= 0 ? "Address" : address.value}
            </p>
          )}
        </label>
      </div>
    </>
  );
};

export default Information;
