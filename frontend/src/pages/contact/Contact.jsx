import React from "react";
function Contact() {
  return (
    <div
      className="container overflow-auto"
      style={{ color: "var(--pallette-3)" }}
    >
      <div className="m-2 px-5 py-3 app-bg-pallette-1 rounded">
        <h1>Contacts</h1>
      </div>

      <div className="m-2 px-5 py-3 app-bg-pallette-1 rounded">
        <p>
          <i className="bi bi-envelope me-2"></i>
          <a
            href="mailto:delafuente.rodolfo4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            delafuente.rodolfo4@gmail.com
          </a>
        </p>
        <p>
          <i className="bi bi-linkedin me-2"></i>
          <a
            href="https://www.linkedin.com/in/rodolfo-iv-dela-fuente-8aabb8244"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <i className="bi bi-github me-2"></i>
          <a
            href="https://github.com/r4df"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
export default Contact;
