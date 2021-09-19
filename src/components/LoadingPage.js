import React from "react";

export const LoadingPage = () => (
  <div className="loader">
    <img
      className="loader__image"
      src="/images/loader.gif"
      alt="loading screen animation"
    />
    <div>Loading...</div>
  </div>
);

export default LoadingPage;
