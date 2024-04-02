import { useTranslation } from 'react-i18next';

interface ContactProps {
darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({darkMode}) => {
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
        <>
        <h1>Alive Contact</h1>
            <div className="text-center">
                <h5 className="mt-4">{t('Contact.description')}</h5>
                <h3 className="mt-5 mb-3">{t('Contact.title')}</h3>
                <h5> <i className="bi bi-envelope-at me-2"></i>
                <span className="navbar-text" onClick={copyEmailToClipboard} style={{cursor: "pointer"}}>baksoeun01@gmail.com</span>                    
                </h5>
                <h5> <i className="bi bi-phone me-2"></i>
                    (US): (+01)949-405-5398</h5>
                <h5> <i className="bi bi-phone me-2"></i>
                    (KR): (+82)010-9364-9820</h5>
                <h5 className="mb-4"> 
                <i className="bi bi-github me-2"></i>
                    <a href="https://www.github.com/datain01" target="_blank" 
                        style={{
                        textDecoration: "none",
                        color: darkMode ? "#f8f9fa" : "#343a40"
                        }}>
                        https://github.com/datain01
                    </a>
                    </h5>

                <a href={t('Contact.resumeLink')} target="_blank">
                        <button type="button" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} 
                            style={{ marginTop: '-1rem' }}>
                            <i className={`bi bi-download`}></i> {t('Contact.resume')}
                        </button>
                    </a>
            </div>
        </>
    );
};

export default Contact;

