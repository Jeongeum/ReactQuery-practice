import React from "react";
import { Link } from "react-router-dom";

const TestDetail = ({ data }) => {
  return (
    <Link to={`/${data.id}`}>
      <div className="test">{data.title}</div>
    </Link>
  );
};

export default TestDetail;
