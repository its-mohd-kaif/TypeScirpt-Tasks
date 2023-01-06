import React from "react";
// DEfine Type
type ChildTask4Props = {
  data: {
    id: number;
    images: string[];
    price: number;
    rating: number;
    title: string;
  }[];
};

function ChildTask4Comp(props: ChildTask4Props) {
  return (
    <div>
      {props.data.map((val) => (
        <div>
          <h2>ID :{val.id}</h2>
          <p>
            {val.images.map((val1) => (
              <img src={val1} alt="img" />
            ))}
          </p>
          <h3 style={{ color: "blue" }}>Price : ₹ {val.price}</h3>
          <p style={{ color: "green" }}>Rating : {val.rating}</p>
          <h1>{val.title}</h1>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default ChildTask4Comp;
