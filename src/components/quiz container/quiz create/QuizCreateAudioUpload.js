import React, { useState } from "react";
import { storage } from "../../../firebase";
import "./QuizCreateImageUpload.scss";
import { v4 as uuidv4 } from "uuid";

export default function QuizCreateAudioUpload({ setAudioUrl }) {
  const [audio, setAudio] = useState(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setAudio(e.target.files[0]);
      setReady(true);
    }
  };

  const handleUpload = () => {
    let name = uuidv4();
    const uploadTask = storage.ref(`audios/${name}`).put(audio);
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
          .ref("audios")
          .child(name)
          .getDownloadURL()
          .then((url) => {
            setAudioUrl(url);
          });
      }
    );
  };

  return (
    <div className="imageUploadContainer w-full flex justify-center items-center flex-col">
      <div className="subImageUploadContainer w-5/6 flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center">
          <label htmlFor="files" className="inputLable pointer-events-none">
            Choose Audio
          </label>
          <input
            id="files"
            type="file"
            className=" absolute opacity-0 cursor-pointer"
            accept="audio/mp3,audio/*;capture=microphone"
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          disabled={!ready}
          onClick={handleUpload}
          style={{ opacity: !ready ? "0.5" : 1 }}
          className="cursor-pointer"
        >
          Upload
        </button>
        <progress value={progress} max="100" />
      </div>
    </div>
  );
}
