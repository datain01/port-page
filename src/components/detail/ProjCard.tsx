import React from 'react';

interface ProjCardProps {
  lang: string;
  title: string;
  date: string;
  context: string;
  darkMode: boolean; 
  buttonLink: string; 
}


const ProjCard: React.FC<ProjCardProps> = ({ lang, title, date, context, darkMode, buttonLink }) => {
 
  const cardClasses = `card ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`;
  const headerClasses = `card-header ${darkMode ? 'bg-secondary' : ''}`;
  const btnClasses = `btn ${darkMode ? 'btn-light' : 'btn-dark'}`;

  return (
    <div className={cardClasses}>
      <div className={headerClasses}>
        {lang}
        <small className="text-muted"> {date}</small>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{context}</p>
        <a href={buttonLink} className={btnClasses}>Visit Project</a>
      </div>
    </div>
  );
};

export default ProjCard;
