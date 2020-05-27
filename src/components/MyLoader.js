import React from "react";
import ReactLoading from 'react-loading';

const MyLoader = ({ type, color }) => (
  <div className="loader">
  <ReactLoading type={'bars'} color={'#fff'} height={'150px'} width={'150px'} />
  </div>
);

export default MyLoader;