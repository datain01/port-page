import React from 'react';
import ProjCard from './detail/ProjCard';

interface ProjectProps {
  darkMode: boolean;
}

const Project: React.FC<ProjectProps> = ({ darkMode }) => {
  return (
    <>
      <div className={`text-center ${darkMode ? 'text-light' : 'text-dark'} ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <h1>Project List</h1>
        <p style={{margin: "1rem 8rem"}}>Following projects are the works I have done.
            The title of the projects and the programming languages used are listed. <br/>
            If you click the cards, you can check detailed information and files. (Updating)</p>
      </div>

      <div className={`container ${darkMode ? 'bg-dark' : 'bg-light'}`}>                    
        <div className="row mt-5 justify-content-center">
          <div className="col-md-4 mx-4">
            <ProjCard
              title="Project Title 1"
              date="January 1, 2024"
              context="This is a brief description of my project."
              darkMode={darkMode}
            />
          </div>
          <div className="col-md-4 mx-4">
            <ProjCard
              title="Project Title 2"
              date="January 2, 2024"
              context="This is another project description."
              darkMode={darkMode}
            />
          </div>

          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              title="Project Title 1"
              date="January 1, 2024"
              context="This is a brief description of my project."
              darkMode={darkMode}
            />
          </div>
          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              title="Project Title 2"
              date="January 2, 2024"
              context="This is another project description."
              darkMode={darkMode}
            />
          </div>

          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              title="Project Title 1"
              date="January 1, 2024"
              context="This is a brief description of my project."
              darkMode={darkMode}
            />
          </div>
          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              title="Project Title 2"
              date="January 2, 2024"
              context="This is another project description."
              darkMode={darkMode}
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Project;
