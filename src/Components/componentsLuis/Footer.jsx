import "../styling/FooterStyle.css";

function Footer() {
  return (
    //creates a large container for all the elements in footer
    <div className="footer-container">
{/* each element in footer belongs to footer-element class */}

      <div className="footer-element">
        <h3>COMPANY</h3>
        <a href="#">About Us</a>
        <br />
        <a href="#">Careers</a>
        <br />
        <a href="#">Partners</a>
      </div>

      <div className="footer-element">
        <h3>COURSES</h3>
        <a href="#">Register</a>
        <br />
        <a href="#">Login</a>
        <br />
        <a href="#">Projects</a>
        <br />
        <a href="#">Teachers</a>
        <br />
        <a href="#">Parents</a>
        <br />
        <a href="#">Resources</a>
      </div>

      <div className="footer-element">
        <h3>SUPPORT</h3>
        <a href="#">FAQS</a>
        <br />
        <a href="#">Helpdesk</a>
        <br />
        <a href="#">Contact Us</a>
      </div>

      <div className="footer-element">
        <h3>LEGAL</h3>
        <a href="#">Terms & Conditions</a>
        <br />
        <a href="#">Privacy Policy</a>
      </div>

      {/* This footer element has a different class name as it's wider in size that the others */}
      <div className="footer-element-works">
        <h3>LEVEL UP WORKS</h3>
        <p>
          LevelUp Works is an Auckland-based enterprise dedicated to developing
          game-based learning software to help teachers in response to the New
          Zealand Digital Technologies & Hangarau Matihiko.
          <p>alan@levelupworks.com</p>
        </p>
        <p>(021) 668 185</p>
      </div>
    </div>
  );
}
export default Footer;
