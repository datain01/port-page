interface NavBarProps {
    darkMode: boolean;
    toggleDarkMode: () => void; 
  }
  
  const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {

    const copyEmailToClipboard = async () => {
        const email = "baksoeun01@gmail.com";
        try {
          await navigator.clipboard.writeText(email);
          alert("Email address copied to clipboard!"); 
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      };

    return (
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top`}>
                <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#">Soeun</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#about">About</a>
                    <a className="nav-link" href="#project">Project</a>
                    <a className="nav-link" href="#education">Education</a>
                    <a className="nav-link" href="#contact">Contact</a>
                    </div>
                    
                        <span className="ms-auto">
                        <span className={`nav-link fw-bold me-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
                            <button onClick={toggleDarkMode} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} me-3`}>
                                {darkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>} </button>  
                                <span className="navbar-text" onClick={copyEmailToClipboard} style={{cursor: "pointer"}}>
                                    baksoeun01@gmail.com
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
        </nav>
 );
}

export default NavBar;