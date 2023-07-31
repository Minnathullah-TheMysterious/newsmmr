import React from "react";
import { Badge, Space } from "antd";

const NewsItem = ({
  newsDescription,
  newsImageUrl,
  newsTitle,
  newsUrl,
  newsSource,
  newsAuthor,
  newsDate,
}) => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        width: "100%",
      }}
    >
      <Badge.Ribbon text={newsSource} color="pink">
        <div className="d-flex justify-content-center my-4">
          <div className="card" style={{ width: "20rem", minHeight: 550 }}>
            <img
              src={newsImageUrl}
              className="card-img-top"
              alt="..."
              style={{ height: 200 }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {newsTitle && newsTitle.length <= 70
                  ? newsTitle
                  : newsTitle.substring(0, 70) + "..."}
              </h5>
              <p className="card-text fs-6">
                {newsDescription && newsDescription.length <= 150
                  ? newsDescription
                  : newsDescription.substring(0, 150) + "..."}
              </p>
              <p className="">
                By <span className="text-success fw-bold">'{newsAuthor}'</span>{" "}
                On{" "}
                <span className="text-success fw-bold">
                  "{new Date(newsDate).toGMTString()}"
                </span>
              </p>
              <a href={newsUrl} className="btn btn-info" target="_blank" rel="noreferrer">
                Read More
              </a>
            </div>
          </div>
        </div>
      </Badge.Ribbon>
    </Space>
  );
};

export default NewsItem;
