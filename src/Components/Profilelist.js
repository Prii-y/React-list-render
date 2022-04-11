import React, { useState, useEffect } from "react";
import { data } from "./data";
import "./card.css";

const Profilelist = () => {
  const [list, setList] = useState(data);

  const clearlist = () => {
    setList([]);
  };
  console.log(list);
  return (
    <div className="card">
      <h2>{list.length} birthdays today</h2>
      <div>
        {list.map((item, index) => {
          return (
            <>
              <Comp name={item} key={index}></Comp>
            </>
          );
        })}
      </div>
      <button type="button" onClick={clearlist}>
        Clear All
      </button>
    </div>
  );
};

const Comp = (props) => {
  console.log(props);
  const { name: fullname, age: ages, picture: image } = props.name;
  return (
    <div className="profiles">
      <img src={image} alt="Profile Picture" />
      <div className="info">
        <h3>{fullname}</h3>
        <h6>{ages}</h6>
      </div>
    </div>
  );
};

export default Profilelist;
