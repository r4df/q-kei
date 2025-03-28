import React from "react";

function About() {
  return (
    <div className="container overflow-auto" style={{color:"var(--pallette-3)"}}>
      <div className="m-2 px-5 py-3 app-bg-pallette-1 rounded">
        <h1>About</h1>
      </div>

      <div className="m-2 px-5 py-3 app-bg-pallette-1 rounded">
        <p style={{color:"var(--pallette-3)"}}>
          Hi! I'm Dolfo. I'm a software engineer at TechnoPro Engineering.
          Currently dispatched at Nissan Automotive. Right now, I am in charge
          of improving our workflows and creating tools and applications to
          improve efficiency. In my spare time, Im studying web development
          which I found interesting. Its a blend of logic and creativity which I
          really enjoy.
        </p>
        <p style={{color:"var(--pallette-3)"}}>
          Education Finished <strong>B.S Computer Engineering</strong> at University of the East
          (Philippines) (June 2006 ~ March 2012)
        </p>
      </div>
    </div>
  );
}
export default About;
