import React from 'react';

interface TimelineCardProps {
  date: string;
  title: string;
  description: string;
  darkMode: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ date, title, description, darkMode }) => {

  const dateClass = darkMode ? 'text-light' : 'text-dark';
  const textClass = darkMode ? 'text-light' : 'text-dark';
  const bgClass = darkMode ? 'bg-secondary' : 'bg-light';

  return (
    <li>
      <div className={`date ${dateClass}`}>{date}</div>
      <div className={`title ${textClass} ${bgClass}`}>{title}</div>
      <div className={`descr ${textClass} ${bgClass}`}>{description}</div>
    </li>
  );
};

export default TimelineCard;
