import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container" >
      <div className="container mb-3 py-3 app-bg-pallette-1 rounded" style={{ color: "var(--pallette-3)" }}>
        <h1 className="m-0">Hello and Welcome!</h1>
      </div>

      <div className="container py-3 rounded app-bg-pallette-1">
        <h2>Projects</h2>
        <div className="table-responsive-xxl">
          <table className="table table-sm table-bordered">
            <caption>This are the current projects in this site.</caption>
            <thead className=" table-dark">
              <tr>
                <th>PN</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Link to="/projects/pokedex">Pokedex</Link>
                </td>
                <td>Simple pokedex</td>
                <td>On-going</td>
                <td>25-03-28</td>
              </tr>
              <tr>
                <td>2</td>
                <td>TicTacToe</td>
                <td>-</td>
                <td>On-going</td>
                <td>25-03-28</td>
              </tr>
              <tr>
                <td>3</td>
                <td>ToDo List</td>
                <td>
                  No database attached. All inputs will be vanished on refresh.
                </td>
                <td>On-going</td>
                <td>25-03-28</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Home;
