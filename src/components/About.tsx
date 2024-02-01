import { useState, useEffect } from "react";

const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const [greeting, setGreeting] = useState<string>('');

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        let dynamicGreeting = '';

        if (hour < 12) {
            dynamicGreeting = "Good morning, ";
        } else if (hour < 18) {
            dynamicGreeting = "Good afternoon, ";
        } else {
            dynamicGreeting = "Good evening, ";
        }

        setGreeting(dynamicGreeting + "my name is");

    }, []);

    return (
        <>
            <div className={`row ${darkMode ? 'text-light bg-dark' : ''}`}>
                <div className="col-md-12 text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                    <h1>
                        <div className="my-4">{greeting}</div>
                        <span style={{ fontSize: '4rem' }}>SOEUN PARK</span>
                    </h1>
                </div>
                <h3 className="text-center" style={{marginTop: "-6rem"}}>
                    This is Soeun Park's Portfolio Page
                </h3>

                <div className="text-center" style={{marginTop:"4rem"}}>
                <h3> 
                I am a computer engineering student at California State University, Fullerton.
                </h3>
                <div className="google-map w-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.283490905923!2d-117.88767822289488!3d33.88235202667956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5ce8cc61391%3A0x2b9810bbb94af355!2sCalifornia%20State%20University%2C%20Fullerton!5e0!3m2!1sen!2skr!4v1686536897459!5m2!1sen!2skr"
                            width="600" height="400" style={{border:"0"}} allowFullScreen className="mt-4"></iframe>
                </div>
                <h5 style={{margin:"3rem 12rem"}}>
                test
                </h5>

                {/* 링크는 이력서로 바꾸기 */}
                <a href="https://www.google.com" target="_blank">
                    <button type="button" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} 
                        style={{ marginTop: '-1rem' }}>
                        <i className={`bi bi-download`}></i> Download Resume
                    </button>
                </a>


                
                </div>

                    
            </div>
        </>
    );
}

export default About;
