import { useTranslation } from 'react-i18next';

const Head: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const { t } = useTranslation();
    const textClass = darkMode ? 'text-light' : 'text-dark';
    const backgroundClass = darkMode ? 'bg-dark' : 'bg-light';
  
    return (
        <>
            <div className={`container-fluid ${backgroundClass}`} id="home" style={{ paddingTop: '6rem' }}>
                <div className="row text-center justify-content-center">

                <div className="col-md-auto head-main mx-5">
                    <a href="#home" className={textClass}>
                    <i className={`bi bi-house-door-fill ${textClass}`} style={{ fontSize: "6rem" }}></i>
                    </a>
                    <h2 className={textClass}>{t('Head.home')}</h2>
                </div>

                    <div className="col-md-auto head-main mx-5">
                        <a href="#about" className={textClass}>
                            <i className={`bi bi-question-circle ${textClass}`} style={{ fontSize: "6rem" }}></i>
                        </a>
                        <h2 className={textClass}>{t('Head.about')}</h2>
                    </div>

                    <div className="col-md-auto head-main mx-5">
                        <a href="#project" className={textClass}>
                            <i className={`bi bi-person-fill ${textClass}`} style={{ fontSize: "6rem" }}></i>
                        </a>
                        <h2 className={textClass}>{t('Head.project')}</h2>
                    </div>

                    <div className="col-md-auto head-main mx-5">
                        <a href="#contact" className={textClass}>
                            <i className={`bi bi-phone ${textClass}`} style={{ fontSize: "6rem" }}></i>
                        </a>
                        <h2 className={textClass}>{t('Head.contact')}</h2>
                    </div>
                    </div>
            </div>
    </>
    );
}

export default Head;