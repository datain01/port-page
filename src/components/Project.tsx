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
              lang = "React, TypeScript"
              title="Half-Random Nickname Generator"
              date="September 10, 2023"
              context="A random nickname generator for a game called, Maplestory. The user can type one letter and then generate random letters for rest of the space."
              darkMode={darkMode}
              buttonLink="https://github.com/datain01/half-nyehuing"
            />
          </div>
          <div className="col-md-4 mx-4">
            <ProjCard
              lang = "HTML, JavaScript/TypeScript"
              title="Game Stats Simulator"
              date="June 22, 2023"
              context="A simulation calculator for a game called, Maplestory. This is for calculating a system called hyper stats in the game."
              darkMode={darkMode}
              buttonLink="https://github.com/datain01/hyperCalc"
            />
          </div>

          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              lang = "MATLAB"
              title="Real-Time Voice Shifter"
              date="December 7, 2023"
              context="Offering interactive pitch shifting and echo effects directly. 
              Users can adjust the pitch to higher or lower tones and add degrees of echo actively using sliders.
              "
              darkMode={darkMode}
              buttonLink="#"
            />
          </div>
          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
            lang = "c"
              title="Project Title 2"
              date="January 2, 2024"
              context="This is another project description."
              darkMode={darkMode}
              buttonLink="#"
            />
          </div>

          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              lang = "c"
              title="Project Title 1"
              date="January 1, 2024"
              context="This is a brief description of my project."
              darkMode={darkMode}
              buttonLink="#"
            />
          </div>
          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              lang = "c"
              title="Project Title 2"
              date="January 2, 2024"
              context="This is another project description."
              darkMode={darkMode}
              buttonLink="#"
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Project;
