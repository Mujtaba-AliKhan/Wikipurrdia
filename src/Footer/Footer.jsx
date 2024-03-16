import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="followUsContainer">
        <h1>Follow Us</h1>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-youtube"></i>
      </div>
      <div className="emailContainer">
        <h3>
          <a href={`mailto:${"contactus@wikipurrdia.com"}`}>
            contactus@wikipurrdia.com
          </a>
        </h3>
      </div>
      <div className="copyrightContainer">
        <h5>
          Wikipurrdia is the property of Mujtaba Ali Khan. &copy; 2024 All
          Rights Reserved.
        </h5>
      </div>
    </footer>
  );
}
export default Footer;
