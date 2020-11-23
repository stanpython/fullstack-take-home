import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Signin from "./components/Signin";
import Courses from "./components/Courses";

import "./stylesheets/App.css";

const App = () => {
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [sections, setSections] = useState([]);
  const [signedupUsers, setSignedupUsers] = useState({});
  const history = useHistory();

  useEffect(() => {
    getSections();
    getSignedUpUsers();
  }, []);

  const getSections = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/sections`);
      const sectionsData = await response.json();
      setSections([...sectionsData]);
    } catch (err) {
      return err;
    }
  };

  const getSignedUpUsers = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/signups`);
      const signedUpData = await response.json();
      const signedUpUsersObj = {};

      signedUpData.map((obj) => {
        if (signedUpUsersObj[obj.section_id]) {
          signedUpUsersObj[obj.section_id].push(<p key={obj.name}>{obj.name}</p>);
        } else {
          signedUpUsersObj[obj.section_id] = [<p key={obj.name}>{obj.name}</p>];
        }
      });
      setSignedupUsers({ ...signedUpUsersObj });
    } catch (err) {
      return err;
    }
  };

  const enroll = async (userId, event) => {
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/sections/enrollment?userId=${userId}&sectionId=${event.target.id}`,
        settings
      );
      const data = await response.json();
      if (data === "Already Enrolled!") {
        alert("Already Enrolled!");
      } else if (data === "Class currently full!") {
        alert("Class currently full");
      } else {
        alert("Successfully Enrolled!");
      }
    } catch (err) {
      return err;
    }
    getSignedUpUsers();
  };

  const unenroll = async (userId, event) => {
    const settings = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(
        `http://localhost:8080/api/sections/enrollment?userId=${userId}&sectionId=${event.target.id}`,
        settings
      );
      const data = await response.json();
      if (data === "Not currently enrolled!") {
        alert("Not currently enrolled!");
      } else {
        alert("Successfully Unenrolled!");
      }
    } catch (err) {
      return err;
    }
    getSignedUpUsers();
  };

  const login = async (event) => {
    event.preventDefault();
    const { name, email } = event.target;
    if (name.value && email.value) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/user?name=${name.value}&email=${email.value}`
        );
        const userData = await response.json();
        setUserData({ ...userData });
        setLoggedIn(true);
        alert("Signed in successfully");
        history.push("/courses");
      } catch (err) {
        return err;
      }
    }
  };

  const refreshUser = async (name, email) => {
    if (name && email) {
      try {
        const response = await fetch(`http://localhost:8080/api/user?name=${name}&email=${email}`);
        const data = await response.json();
        setUserData({ ...data });
      } catch (err) {
        return err;
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <Link id="links" to="/signup">
          Sign In
        </Link>
        <Link id="links" to="/courses">
          Courses
        </Link>
      </div>
      <Switch>
        <Route path="/signup">
          <Signin login={login} />
        </Route>
        <Route path="/courses">
          <Courses
            user={userData}
            loggedIn={loggedIn}
            sections={sections}
            signedupUsers={signedupUsers}
            enroll={enroll}
            unenroll={unenroll}
            refreshUser={refreshUser}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
