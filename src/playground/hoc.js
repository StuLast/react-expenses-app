//Higher Order Components

//A component that renders another component
//Reuse code
//?render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

//NON HOC 
const Info = (props) => (
  <div>
    <h1> Info</h1>
    <p>  The info is : {props.info}</p>
  </div>
);

//HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.  Please don't share</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};


//HOC2
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
        {props.isAuthenticated ? (
          <WrappedComponent {...props}/>
        ) : (
          <p>Please Log in to view info</p>
        )}
      </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="some info" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="some info" />, document.getElementById("app"));



