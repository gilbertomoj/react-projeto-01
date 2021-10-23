import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Localização</h4>
            <h1 className="list-unstyled">
              <li>22023023-332</li>
              <li>Pernambuco, Brasil</li>
              <li>São jose da coroa 32939 casa 10</li>
            </h1>
          </div>
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Desenvolvido por @gilbertomoj
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;