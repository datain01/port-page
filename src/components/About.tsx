import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import LangCard from "./detail/langCard";
import skillC from '/public/images/skill_c.png';
import skillCss from '/public/images/skill_css.png';
import skillEx from '/public/images/skill_ex.png';
import skillJs from '/public/images/skill_js.png';
import skillNe from '/public/images/skill_ne.png';
import skillReact from '/public/images/skill_react.png';
import skillVerilog from '/public/images/skill_verilog.png';
import skillVhdl from '/public/images/skill_vhdl.png';

const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const { t } = useTranslation();
    const [greeting, setGreeting] = useState<string>('');

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        let dynamicGreeting = '';
    
        if (hour < 12) {
            dynamicGreeting = t('About.morning');
        } else if (hour < 18) {
            dynamicGreeting = t('About.afternoon');
        } else {
            dynamicGreeting = t('About.evening');
        }    
    
        setGreeting(dynamicGreeting + t('About.my'));
    }, [t]); 
    

    return (
        <>
            <div className={`row ${darkMode ? 'text-light bg-dark' : ''}`}>
                <div className="col-md-12 text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                    <h1>
                        <div className="my-4">{greeting}</div>
                        <span style={{ fontSize: '4rem' }}>{t('About.name')}</span>
                    </h1>
                </div>
                <h3 className="text-center" style={{marginTop: "-6rem"}}>
                    {t('About.introduction')}
                </h3>

                <div className="text-center" style={{marginTop:"4rem"}}>
                    <h3> 
                    {t('About.self')}
                    </h3>
                    <div className="google-map w-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.283490905923!2d-117.88767822289488!3d33.88235202667956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5ce8cc61391%3A0x2b9810bbb94af355!2sCalifornia%20State%20University%2C%20Fullerton!5e0!3m2!1sen!2skr!4v1686536897459!5m2!1sen!2skr"
                                width="600" height="400" style={{border:"0"}} allowFullScreen className="mt-4"></iframe>
                    </div>
                    <h5 style={{margin:"3rem 12rem"}}>
                    {t('About.selfDescription')}
                    </h5>

                    {/* 링크는 이력서로 바꾸기 */}
                    <a href="https://drive.google.com/file/d/1LsTQaWwaaQNN3x6Tdt_pHMwhfwGQ3xIE/view?usp=sharing" target="_blank">
                        <button type="button" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} 
                            style={{ marginTop: '-1rem' }}>
                            <i className={`bi bi-download`}></i> {t('About.resume')}
                        </button>
                    </a>

                    <h2 className="mt-5">Skills</h2>

                    <div className="container">                    
                        <div className="row mt-5 justify-content-center">
                            <LangCard
                            imageUrl={skillC}
                            description="C/C++"
                            darkMode={darkMode}
                            />
                            <LangCard
                            imageUrl={skillVhdl}
                            description="VHDL"
                            darkMode={darkMode}
                            />
                            <LangCard
                            imageUrl={skillVerilog}
                            description="Verilog"
                            darkMode={darkMode}
                            />
                            <LangCard
                            imageUrl={skillJs}
                            description="Javascript/Typescript"
                            darkMode={darkMode}
                            />
                        </div>

                        <div className="row mt-5 justify-content-center">
                            <LangCard
                            imageUrl={skillCss}
                            description="CSS"
                            darkMode={darkMode}
                            />
                            <LangCard
                            imageUrl={skillReact}
                            description="React"
                            darkMode={darkMode}
                            />
                            <LangCard
                            imageUrl={skillNe}
                            description="Next.js"
                            darkMode={darkMode}
                            />
                            <LangCard
                            imageUrl={skillEx}
                            description="Express.js"
                            darkMode={darkMode}
                            />
                        </div>
                    </div>

                    <div className="progress-stacked" style={{ margin: "4rem 16rem", height:'2rem' }}>
                        <div className="progress" role="progressbar" aria-label="Korean" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%', height: '2rem' }}>
                            <div className="progress-bar bg-primary" style={{ width: '100%', height: '2rem' }}>{t('About.langKor')}</div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="English" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} style={{ width: '35%', height: '2rem' }}>
                            <div className="progress-bar bg-success" style={{ width: '100%', height: '2rem' }}>{t('About.langEng')}</div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Japanese" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{ width: '25%', height: '2rem' }}>
                            <div className="progress-bar bg-info" style={{ width: '100%', height: '2rem' }}>{t('About.langJap')}</div>
                        </div>
                    </div>

                    
                    
                
                </div>

                    
            </div>
        </>
    );
}

export default About;
