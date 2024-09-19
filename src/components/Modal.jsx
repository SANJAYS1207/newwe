// Modal.js
import React, { useRef } from 'react';
import './Modal.css'; // Import CSS for the modal

function Modal({ isOpen, onClose, videoSrc }) {
  const videoRef = useRef(null);

  // Function to handle video end
  const handleVideoEnd = () => {
    onClose(); // Close the modal when video ends
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <video
          ref={videoRef}
          controls
          autoPlay
          onEnded={handleVideoEnd} // Add onEnded event handler
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Modal;