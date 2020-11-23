import React, { useEffect, useState } from 'react';
import FocusTrap from 'focus-trap-react';
import ReactDOM from 'react-dom';

const Content = ({ courseContent, closeModal }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    mapCourseContent();
  });

  const mapCourseContent = () => {
    const contentContainers = [];
    courseContent.map((obj) => {
      contentContainers.push(
        <div key={obj.name} className="course-content">
          <p className="content-title">{obj.name}</p>
          <p>{obj.description}</p>
        </div>
      );
    });
    setContent([...contentContainers]);
  };

  return ReactDOM.createPortal(
    <FocusTrap>
      <aside tag="aside" role="dialog" tabIndex="-1" aria-modal="true" className="modal-cover">
        <div className="modal-area">
          <button aria-label="Close Modal" aria-labelledby="close-modal" className="_modal-close" id="closeModal1" onClick={closeModal}>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            <h2>Course Content</h2>
            {content}
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Content;
