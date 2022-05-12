import React from "react";
import { useEffect, useState } from "react";

const User = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setGetData(data));

    // fetch('https://jsonplaceholder.typicode.com/posts').then(response => console.log(response))
  }, []);
  console.log("GET DATA :", getData);
  return (
    <div className="card">
      <div className="card-header">User List</div>
      <div className="card-body">
        <p className="card-text">
          {getData.map((val, ind) => {
            return (
              <>
                <div className="row">
                  <div className="col-md-10 col-sm-10  mx-auto">
                    <div className="row mb-3">
                      <div className="card ">
                        <div className="card-body">
                          <p className="card-text">
                            <p>
                              {val.userId + " "}
                              {val.id + " "}
                              {val.title}
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default User;
