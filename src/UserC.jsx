import React from "react";

const UserC = (props) => {
  return (
    <div>
      <div className="col-md-10 col-sm-10 mx-auto">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              {props.userId}
              {props.id}
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserC;
