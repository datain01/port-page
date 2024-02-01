const Head: React.FC = () => {
    return (
    <>
    <div className="container-fluid" id="home" style={{ paddingTop: '6rem' }}>
            <div className="row text-center justify-content-center">
              <div className="col-md-auto head-main mx-5">
                <a href="#home"><i className="bi bi-house-door-fill" style={{ fontSize: "6rem" }}></i></a>
                <h2>HOME</h2>
              </div>

              <div className="col-md-auto head-main mx-5">
                <a href="#about"><i className="bi bi-question-circle" style={{ fontSize: "6rem" }}></i></a>
                <h2>ABOUT</h2>
              </div>

              <div className="col-md-auto head-main mx-5">
                <a href="#project"><i className="bi bi-person-fill" style={{ fontSize: "6rem" }}></i></a>
                <h2>PROJECT</h2>
              </div>

              <div className="col-md-auto head-main mx-5">
                <a href="#contact"><i className="bi bi-phone" style={{ fontSize: "6rem" }}></i></a>
                <h2>CONTACT</h2>
              </div>
            </div>
          </div>
    </>
    );
}

export default Head;