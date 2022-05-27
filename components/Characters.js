import React from "react";
import Image from "next/image";
const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col">
            <div className="card">
                <Image src={item.image} alt="" width="400" height='400'></Image>
                <h5>{item.name}</h5>
                <p style={{color: 'rgb(3, 3, 46)'}}>Location: {item.location.name}</p>
                <p>{item.spcies}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
