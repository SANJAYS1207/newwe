// Alpha.js
import React, { useState } from 'react';
import './Page3.css';
import Modal from './Modal';

function Page3() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Function to show the video based on the clicked letter
  const showVideo = (letter) => {
    setVideoSrc(`${process.env.PUBLIC_URL}/videos/${letter}.mp4`); // Path to video
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setVideoSrc('');
  };

  return (
    <div className="centered-container">
      {Array.from(alphabet).map((letter, index) => (
        <div
          key={index}
          className="alphabet-box"
          onClick={() => showVideo(letter)}
        >
          {letter}
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc={videoSrc}
      />
    </div>
  );
}

export default Page3;