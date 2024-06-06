import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("mario");

  // Navigate component helps us to redirect user according to some specific condition.
  if (!user) {
    // the replace property replace the history of browser that not show About page while we go one page back
    return <Navigate to="/" replace={true}/>;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis
        minima deleniti praesentium tempora repudiandae aut, culpa sit tempore
        optio! Quis culpa, in voluptatibus nihil eveniet voluptate unde omnis
        labore!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis
        minima deleniti praesentium tempora repudiandae aut, culpa sit tempore
        optio! Quis culpa, in voluptatibus nihil eveniet voluptate unde omnis
        labore!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis
        minima deleniti praesentium tempora repudiandae aut, culpa sit tempore
        optio! Quis culpa, in voluptatibus nihil eveniet voluptate unde omnis
        labore!
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
