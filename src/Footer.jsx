import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="row d-flex footer">
          <div className="col-md-4 col-sm-12">
            <h3>About Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              odio labore, reprehenderit dolorum quos error numquam quisquam
              quam dolor fugit obcaecati repudiandae voluptates quia veritatis
              nostrum eligendi laborum eveniet tempore?
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>
              Contact
              <FontAwesomeIcon icon={faCoffee} />
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
