import React from 'react';

interface ProjCardProps {
  title: string;
  date: string;
  context: string;
  darkMode: boolean; // 다크 모드 상태를 props로 받습니다.
}

const ProjCard: React.FC<ProjCardProps> = ({ title, date, context, darkMode }) => {
  // 다크 모드일 때 적용할 스타일 클래스
  const cardClasses = `card ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`;
  const headerClasses = `card-header ${darkMode ? 'bg-secondary' : ''}`;
  const btnClasses = `btn ${darkMode ? 'btn-light' : 'btn-dark'}`;

  return (
    <div className={cardClasses}>
      <div className={headerClasses}>
        {title}
        <small className="text-muted"> {date}</small>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">{context}</p>
 
        <a href="#" className={btnClasses}>Go somewhere</a>
      </div>
    </div>
  );
};

export default ProjCard;
