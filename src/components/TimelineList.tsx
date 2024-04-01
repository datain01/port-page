import React from 'react';
import { useTranslation } from 'react-i18next';
import TimelineCard from './detail/TimelineCard';

interface TimelineListProps {
    darkMode: boolean;
}

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineData {
  [key: string]: TimelineItem;
}

const TimelineList: React.FC<TimelineListProps> = ({ darkMode }) => {
  const { t } = useTranslation();

  const timelineData: TimelineData = t('timeline', { returnObjects: true });
  const itemKeys = Object.keys(timelineData);

  return (
    <div className="timeline-container" style={{margin: "6rem 0rem"}}>
      <h1 className='text-center mt-5'>EDUCATION</h1>
      <ul className='timeline-list mt-5'>
        {itemKeys.map((key) => (
          <TimelineCard
            key={key}
            date={timelineData[key].date}
            title={timelineData[key].title}
            description={timelineData[key].description}
            darkMode={darkMode}
          />
        ))}
      </ul>
    </div>
  );
};


export default TimelineList;
