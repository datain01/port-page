import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjCard from './detail/ProjCard';

interface ProjectProps {
  darkMode: boolean;
}

const Project: React.FC<ProjectProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const projects = t('Project.projectList', { returnObjects: true });

  return (
    <>
      <div className={`text-center ${darkMode ? 'text-light' : 'text-dark'} ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <h1>Project List</h1>
        <p style={{margin: "1rem 8rem"}}>{t('Project.description')}</p>
      </div>

      <div className={`container ${darkMode ? 'bg-dark' : 'bg-light'}`}>                    
        <div className="row mt-5 justify-content-center">
          {Object.entries(projects).map(([key, project]) => (
            <div key={key} className="col-md-4 mx-4 mt-4">
              <ProjCard
                lang={project.lang}
                title={project.title}
                date={project.date}
                context={project.context}
                darkMode={darkMode}
                buttonLink={project.buttonLink}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
