import React, { useState, useEffect } from 'react';
import PopupContainer from './content-popup/PopupContainer';

import '../stylesheets/Homepage.css';

const Homepage = ({ user, loggedIn, sections, signedupUsers, enroll, unenroll, refreshUser }) => {
  const [sectionDiv, setSectionDiv] = useState([]);
  const [courseContent, setCourseContent] = useState([]);
  const [modal, setModal] = useState(false);

  const { name, id } = user;

  useEffect(() => {
    mapSectionsTitles(sections);
    refreshUser(user.name, user.email);
  }, [signedupUsers, user]);

  const mapSectionsTitles = (sectionsData) => {
    const containers = [];

    sectionsData.sort((a, b) => {
      const dateA = new Date(a.start_date);
      const dateB = new Date(b.start_date);
      return dateA - dateB;
    });

    sectionsData.map((obj) => {
      const date = new Date(obj.start_date);
      containers.push(
        <div key={obj.id} className="course-date">
          <div className="course-title-desc">
            <p className="date">{date.toString().slice(0, 16)}</p>
            <p className="title">{obj.name}</p>
            <p className="desc">{obj.description}</p>
          </div>
          <div>
            <p className="users-signed-up">User's signed up:</p>
            {signedupUsers[obj.id]}
          </div>
          <button id={obj.id} onClick={(e) => enroll(id, e)}>
            Enroll
          </button>
          <button id={obj.id} onClick={(e) => unenroll(id, e)}>
            Unenroll
          </button>
          <button id={obj.id} className={obj.course_id} onClick={(e) => getCourseContent(e)}>
            See Content
          </button>
        </div>
      );
    });
    setSectionDiv([...containers]);
  };

  const getCourseContent = async (event) => {
    const { id, className } = event.target;
    if (user.sections_enrolled.includes(Number(id))) {
      try {
        const response = await fetch(`http://localhost:8080/api/courses?courseId=${className}`);
        const data = await response.json();
        setCourseContent([...data]);
        setModal(true);
      } catch (err) {
        return err;
      }
    } else {
      alert('You need to enroll for this course to see content!');
    }
  };

  if (loggedIn) {
    return (
      <div className="Homepage">
        <h1>Welcome, {name}!</h1>
        <div className="course-container">{sectionDiv}</div>
        {modal ? <PopupContainer courseContent={courseContent} setModal={setModal} /> : null}
      </div>
    );
  } else {
    return (
      <div className="Homepage">
        <h3>Please login to view courses</h3>
      </div>
    );
  }
};

export default Homepage;
