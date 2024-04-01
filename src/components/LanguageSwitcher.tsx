import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    darkMode: boolean;
  }

  const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ darkMode }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;
  let buttonText = currentLanguage.startsWith('ko') ? 'Eng' : '한국어';
  let targetLanguage = currentLanguage.startsWith('ko') ? 'en' : 'ko'; 

  let buttonClass = darkMode ? 'btn btn-outline-light' : 'btn btn-outline-dark';

  return (
    <button onClick={() => changeLanguage(targetLanguage)} className={buttonClass}>
      {buttonText}
    </button>
  );
}

export default LanguageSwitcher;
