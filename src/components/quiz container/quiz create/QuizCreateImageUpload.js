import React, { useState, useEffect, useRef } from "react";
import { storage } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";
import "./QuizCreateImageUpload.scss";

export default function QuizCreateImageUpload({ setImageUrl, imageUrl }) {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (imageUrl === "") {
      setReady(false);
      setProgress(0);
      setImage(null);
      if (fileInputRef) {
        if (fileInputRef.current.value) {
          fileInputRef.current.value = "";
        }
      }
    } else {
      setReady(true);
      setProgress(100);
    }
  }, [imageUrl]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setReady(true);
    }
  };

  const handleUpload = () => {
    let name = uuidv4();
    if (image) {
      const uploadTask = storage.ref(`images/${name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(name)
            .getDownloadURL()
            .then((url) => {
              setImageUrl(url);
            });
        }
      );
    }
  };

  return (
    <div className="imageUploadContainer w-full flex justify-center items-center flex-col">
      <div className="subImageUploadContainer w-5/6 flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center">
          <label htmlFor="files" className="inputLable pointer-events-none">
            Choose Image
          </label>
          <input
            ref={fileInputRef}
            id="files"
            type="file"
            className=" absolute opacity-0 cursor-pointer"
            accept="image/png, image/jpeg, image/jpg, image/svg, image/webp"
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          style={{ opacity: !ready ? "0.5" : 1 }}
          onClick={handleUpload}
          className="cursor-pointer"
        >
          Upload
        </button>
        <progress value={progress} max="100" />
      </div>
    </div>
  );
}
