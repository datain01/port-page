import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';


interface NavBarProps {
    darkMode: boolean;
    toggleDarkMode: () => void; 
  }
  
  const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
    const { t } = useTranslation();

    const copyEmailToClipboard = async () => {
        const email = "baksoeun01@gmail.com";
        try {
          await navigator.clipboard.writeText(email);
          alert(t('Contact.copy')); 
        } catch (err) {
          console.error(t('Contact.copyFail'), err);
        }
      };

    return (
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top`}>
                <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#">{t('Head.name')}</a>                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="#">{t('Head.home')}</a>
                    <a className="nav-link" href="#about">{t('Head.about')}</a>
                    <a className="nav-link" href="#project">{t('Head.project')}</a>
                    <a className="nav-link" href="#education">{t('Head.education')}</a>
                    <a className="nav-link" href="#contact">{t('Head.contact')}</a>
                    </div>
                      
                        <span className="ms-auto">
                        <span className={`nav-link fw-bold me-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
                            <button onClick={toggleDarkMode} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} me-3`}>
                                {darkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>} </button>  
                                <LanguageSwitcher darkMode={darkMode} />
                                <span className="navbar-text mx-3" onClick={copyEmailToClipboard} style={{cursor: "pointer"}}>
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