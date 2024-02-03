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
              date="September 2023"
              context="A random nickname generator for a game called, Maplestory. The user can type one letter and then generate random letters for rest of the space.
              There are three types of buttons to generate two letters, three letters, and six letters nickname."
              darkMode={darkMode}
              buttonLink="https://github.com/datain01/half-nyehuing"
            />
          </div>
          <div className="col-md-4 mx-4">
            <ProjCard
              lang = "NextJS, ExpressJS, PostgreSQL, typeORM, Docker"
              title="Twitter Clone Coding"
              date="September 2023"
              context="Clone codinf of the twitter to study NextJS, ExpressJS, PostgreSQL, typeORM, Docker, and bootstrap. 
              To study the commonly used micro-service architecture system."
              darkMode={darkMode}
              buttonLink="https://github.com/datain01/twtClone"
            />
          </div>
          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              lang = "HTML, JavaScript/TypeScript"
              title="Game Stats Simulator"
              date="June 2023"
              context="A simulation calculator for a game called, Maplestory. This is for calculating a system called hyper stats in the game."
              darkMode={darkMode}
              buttonLink="https://github.com/datain01/hyperCalc"
            />
          </div>

          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              lang = "MATLAB"
              title="Real-Time Voice Shifter"
              date="December 2023"
              context="Offering interactive pitch shifting and echo effects directly. 
              Users can adjust the pitch to higher or lower tones and add degrees of echo actively using sliders.
              "
              darkMode={darkMode}
              buttonLink="https://github.com/datain01/voice"
            />
          </div>
          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
            lang = "Verilog"
              title="Up-Down Guessing Game"
              date="December 2023"
              context="Guessing 7-bit number with switch input. The system compares guessed number and the actual number and determines whether high or low. If the user
              guesses correctly in 10 chances, the user wins."
              darkMode={darkMode}
              buttonLink="https://github.com/datain01/updown"
            />
          </div>

          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              lang = "C"
              title="Intersection traffic light controller"
              date="October 2023"
              context="It is a system that controls the traffic lights of cars and pedestrians at the intersection based on FSM state. It can be tested directly with the MSP432 microcontroller board."             
              darkMode={darkMode}
              buttonLink="https://github.com/datain01/trafficControl/tree/main"
            />
          </div>
          <div className="col-md-4 mx-4 mt-4">
            <ProjCard
              lang = "Assembly"
              title="Blink Controller"
              date="September 2023"
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
