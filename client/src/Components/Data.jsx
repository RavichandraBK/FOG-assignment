import React from "react";

const Data = () => {
  const value = 50;
  const max = 100;
  const percentage = value / max;
  return (
    <>
      <div>
        <div className="flex">
          <p>Hare krishna</p>
          <div>
            <span>{`${value}/${max}`}</span>
            <progress
              value={value}
              max={max}
              style={{ width: "100%" }}
            />
            <div
              style={{
                width: `${percentage}%`,
                backgroundColor: "blue",
                height: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
