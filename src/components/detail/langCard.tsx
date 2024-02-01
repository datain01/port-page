import React from "react";

interface LangCardProps {
  imageUrl: string;
  description: string;
}

const LangCard: React.FC<LangCardProps> = ({ imageUrl, description }) => {
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LangCard;
