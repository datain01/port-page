interface LangCardProps {
  imageUrl: string;
  description: string;
}

const LangCard: React.FC<LangCardProps> = ({ imageUrl, description }) => {
  return (
    <div className="col-md-auto text-center">
      <div className="card" style={{ width: "12rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LangCard;
