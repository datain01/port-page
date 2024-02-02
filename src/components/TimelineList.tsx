import React from 'react';
import TimelineCard from './detail/TimelineCard';

interface TimelineListProps {
    darkMode: boolean;
  }
  
  const TimelineList: React.FC<TimelineListProps> = ({ darkMode }) => {
    return (
      <div className="timeline-container">
        <h1 className='text-center mt-5'>EDUCATION</h1>
        <ul className='timeline-list mt-5'>
          <TimelineCard
            date="2002"
            title="Title 1"
            description="Description text here..."
            darkMode={darkMode}
          />
            <TimelineCard
                date="2002"
                title="Title 1"
                description="Description text here..."
                darkMode={darkMode}
            />
            <TimelineCard
                date="2002"
                title="Title 1"
                description="Description text here..."
                darkMode={darkMode}
            />
            </ul>
        </div>
  );
};

export default TimelineList;
