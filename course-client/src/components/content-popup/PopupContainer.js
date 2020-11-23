import React, { useEffect } from 'react';
import Content from './Content';

const PopupContainer = ({ courseContent, setModal }) => {
  useEffect(() => {
    toggleScrollLock();
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  const toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  return (
    <React.Fragment>
      <Content closeModal={closeModal} courseContent={courseContent} />
    </React.Fragment>
  );
};

export default PopupContainer;
