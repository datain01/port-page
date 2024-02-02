interface LangCardProps {
  imageUrl: string;
  description: string;
  darkMode: boolean;
}

const LangCard: React.FC<LangCardProps> = ({ imageUrl, description, darkMode }) => {
  const cardTextClass = darkMode ? 'text-light' : 'text-dark';
  const cardBackgroundClass = darkMode ? 'bg-dark' : 'bg-light';

  return (
    <div className="col-md-auto text-center">
      <div className={`card ${cardBackgroundClass}`} style={{ width: "12rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className={`card-body ${cardTextClass}`}>
          <p className={`card-text ${cardTextClass}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LangCard;
