import React from "react";
import { Link } from "react-router-dom";
import ContainerType1 from "../../component/ContainerType1";

function Home() {
  return (
    <div className="container" >
      <ContainerType1>
        <h1 className="m-0">Hello and Welcome!</h1>
      </ContainerType1>

      <ContainerType1>
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
                <td>
                  <span className="text-success">完了 <i className="bi bi-check-circle-fill"></i></span></td>
                <td>25-03-28</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <Link to="/projects/tictactoe">TicTacToe</Link>
                </td>
                <td>-</td>
                <td className="text-primary">進行中</td>
                <td>25-03-28</td>
              </tr>
              <tr>
                <td>3</td>
                <td>ToDo List</td>
                <td>
                  No database attached. All inputs will be vanished on refresh.
                </td>
                <td className="text-warning">保留</td>
                <td>25-03-28</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContainerType1>
    </div>
  );
}
export default Home;
