'use client';
import React, { useState, useEffect } from 'react';

const CustomLightBox = ({ isOpen, onClose, images, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (initialIndex !== undefined) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex]);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <img src={images[currentIndex]} alt="" style={imageStyle} />
      <button
        onClick={onClose}
        style={isMobile ? closeButtonMobileStyle : closeButtonStyle}
      >
        &times;
      </button>
      <button style={leftArrowStyle} onClick={handlePrevious}>
        &#8249;
      </button>
      <button style={rightArrowStyle} onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const imageStyle = {
  maxWidth: '90%',
  maxHeight: '90%',
  borderRadius: '10px',
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '4rem',
  cursor: 'pointer',
  zIndex: 1001,
};

const closeButtonStyle = {
  position: 'absolute',
  top: '20px',
  right: '40px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '2.5rem',
  cursor: 'pointer',
  zIndex: 1002,
};

const closeButtonMobileStyle = {
  position: 'absolute',
  top: '26%',
  right: '40px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '2.5rem',
  cursor: 'pointer',
  zIndex: 1002,
};

const leftArrowStyle = {
  ...arrowStyle,
  left: '30px',
};

const rightArrowStyle = {
  ...arrowStyle,
  right: '30px',
};

export default CustomLightBox;
