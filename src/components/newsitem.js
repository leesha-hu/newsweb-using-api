
import React from 'react';

const NewsItem = ({ title, description, imurl, newsurl }) => {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imurl ? imurl : "https://via.placeholder.com/150"}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
