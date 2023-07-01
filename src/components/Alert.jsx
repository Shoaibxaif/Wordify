import React from "react";

const Alert = (props) => {
  return (
    <>
      {props.alert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
           <strong>{props.alert.type}</strong> : {props.alert.message}
        </div>
      )}
    </>
  );
};

export default Alert;
