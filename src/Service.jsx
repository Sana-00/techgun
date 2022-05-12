import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
  return (
    <div>
      <div className="my-5">
        <div className="text-center service">
          Our Services
          <hr className="border-line" />
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="row gx-9">
                {Sdata.map((val, ind) => {
                  return (
                    <>
                      <div className="col-lg-4 gy-2">
                        <Card
                          key={ind}
                          imgsrc={val.imgsrc}
                          title={val.title}
                          btntext={val.btntext}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
