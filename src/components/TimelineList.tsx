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
            date="2011-2014"
            title="International School of Prague"
            description="Attend the international school from 4th grade to 7th grade, which is located in Prague, Czech Republic."
            darkMode={darkMode}
          />
            <TimelineCard
                date="2017-2018"
                title="Pungduck HighSchool"
                description="Attended highschool until 11th grade, which is located in Sugi-gu, Korea"
                darkMode={darkMode}
            />
            <TimelineCard
                date="2018-2020"
                title="Northwood HighSchool"
                description="Attended highschool from 11th grade to 12th grade, which is located in California, United States."
                darkMode={darkMode}
            />
            <TimelineCard
                date="2020-Now"
                title="California State University, Fullerton"
                description="Have attended university and expect to grade in 2024, computer engineering B.S. major undergraduate"
                darkMode={darkMode}
            />
            </ul>
        </div>
  );
};

export default TimelineList;
