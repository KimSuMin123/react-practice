import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>안녕, 리엑트!!</h1>
      <h2>현재 날짜 : {new Date().toLocaleDateString()}</h2>
    </div>
  );
}

export default Clock;
