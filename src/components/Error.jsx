import React from "react";

const Error = ({ msg }) => {
  return (
    <div className="loader-wrapper">
      <div className="error">
        <h1>Üzgünüz Bir Sorun Oluştu</h1>

        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Error;
