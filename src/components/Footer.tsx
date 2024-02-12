interface FooterProps {
    darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({darkMode}) => {
    const bgClass = darkMode ? 'bg-secondary-subtle' : 'bg-secondary';
    const textClass = darkMode ? 'text-dark' : 'text-light';
  
    return (
        <>
      <footer className={`footer mt-5 py-4 ${bgClass} ${textClass}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <span>made by Soeun Park | All Right Reserved</span>
            </div>
            <div className="col text-end">
              <span>Updated at 240212</span>
            </div>
          </div>
        </div>
      </footer>
        </>
    );

};

export default Footer;