import React, { useRef } from "react";
import image from "../../media/contact.jpeg";
import "./Contact.scss";
export default function Contact({ setContact }) {
  const contactRef = useRef(null);
  const handleCancel = () => {
    contactRef.current.classList.toggle("fadeOut");
    setTimeout(() => {
      setContact(false);
    }, 400);
  };
  return (
    <div
      ref={contactRef}
      className="aboutCon w-screen h-screen fixed top-0 left-0 flex justify-start items-center flex-col z-10"
    >
      <div
        className="aboutCancel absolute flex justify-evenly items-center flex-col top-3 right-3 cursor-pointer"
        onClick={handleCancel}
      >
        <span className="w-full rounded-full absolute"></span>
        <span className="w-full rounded-full absolute"></span>
      </div>
      <div className="logo flex justify-center items-center flex-col w-full mt-12">
        <img src={image} alt="logo" className="w-24 h-24 rounded-full" />
        <h1 className="font-bold text-2xl mt-3">Aditya Dhade</h1>
      </div>
      <div className="points flex justify-center items-center w-full mt-4">
        <a
          rel="noreferrer"
          href="https://github.com/b1ink0"
          target="_blank"
          className="text-center w-5/6 text-lg"
        >
          Github
        </a>
      </div>
      <div className="points flex justify-center items-center w-full mt-4">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/aditya-dhade-b04891207"
          target="_blank"
          className="text-center w-5/6 text-lg"
        >
          Linkedin
        </a>
      </div>
      <div className="points flex justify-center items-center w-full mt-4">
        <a
          rel="noreferrer"
          href="https://www.instagram.com/stupid__gaming/"
          target="_blank"
          className="text-center w-5/6 text-lg"
        >
          Instagram
        </a>
      </div>
      <div className="points flex justify-center items-center w-full mt-4">
        <a
          href="https://www.youtube.com/channel/UCPn2C-ck6pabad0PEXNQW5w"
          rel="noreferrer"
          target="_blank"
          className="text-center w-5/6 text-lg"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}
