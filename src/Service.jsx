import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {

return(

<div>
    <div className="my-5">
        <div className="text-center">
            Our Services
        </div>
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    {
                        Sdata.map((val, ind) =>{
                            return <Card key={ind}
                            imgsrc = {val.imgsrc}
                            title= {val.title}
                            />
                        }
                        )
                    }
                </div>
            </div>
        </div>
    </div>
</div> );
};
export default Service;