import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mydata, setData] = useState([]);
  let history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    const items = { email, password };
    const apiOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    };
    await fetch("https://reqres.in/api/login", apiOptions)
      .then((response) => console.log(response.json()))
      .then((data) => setData(data));
    history.push("/home");
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4 col-lg-12 mx-auto contact">
          <h2 className="text-center mt-5 con-text">Login</h2>

          <form>
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-lg-12 mx-auto ">
                  <div className="form-group">
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control text-login"
                      name="useremail"
                      value="eve.holt@reqres.in"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control text-login"
                      id="exampleInputPassword1"
                      value="cityslicka"
                      placeholder="password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <button
                type="submit"
                onClick={handleLogin}
                value={"send"}
                className="btn-primary btn-login"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
