interface NavBarProps {
    darkMode: boolean;
    toggleDarkMode: () => void; // 함수 타입을 추가합니다.
  }
  
  const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
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
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Project</a>
                    <a className="nav-link" href="#">Education</a>
                    <a className="nav-link" href="#">Contact</a>
                    </div>
                    
                        <span className="ms-auto">
                        <span className={`nav-link fw-bold me-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
                            <button onClick={toggleDarkMode} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} me-3`}>
                                {darkMode ? 'Light Mode' : 'Dark Mode'} </button>  
                            e-mail: baksoeun01@gmail.com</span>
                        </span>
                    </div>
                </div>
        </nav>
 );
}

export default NavBar;