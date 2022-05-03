import React, { useState } from "react";
import { storage } from "../../../firebase";
import "./QuizCreateImageUpload.scss";

export default function QuizCreateImageUpload({ setImageUrl }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
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
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImageUrl(url);
          });
      }
    );
  };

  console.log(image);
  return (
    <div className="imageUploadContainer w-full flex justify-center items-center flex-col">
      <div className="subImageUploadContainer w-5/6 flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center">
          <label for="files" class="inputLable" className="pointer-events-none">
            Choose Image
          </label>
          <input
            id="files"
            type="file"
            className=" absolute opacity-0 cursor-pointer"
            accept="image/png, image/jpeg, image/jpg, image/svg, image/webp"
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleUpload} className="cursor-pointer">
          Upload
        </button>
        <progress value={progress} max="100" />
      </div>
    </div>
  );
}
