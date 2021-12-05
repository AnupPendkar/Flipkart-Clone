import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <div className="about">
            <span className="title">ABOUT</span>
            <span className="text">Contact Us</span>
            <span className="text">About Us</span>
            <span className="text">Careers</span>
            <span className="text">Flipkart Stories</span>
            <span className="text">Press</span>
            <span className="text">Flipkart</span>
            <span className="text">Wholesale</span>
            <span className="text">Corporate</span>
            <span className="text">Information</span>
          </div>
          <div className="help">
            <span className="title">HELP</span>
            <span className="text">Payments</span>
            <span className="text">Shipping</span>
            <span className="text">Returns</span>
            <span className="text">FAQ</span>
            <span className="text">Report</span>
            <span className="text">Infringement</span>
          </div>
          <div className="policy">
            <span className="title">POLICY</span>
            <span className="text">Return Policy</span>
            <span className="text">Terms of Use</span>
            <span className="text">Security</span>
            <span className="text">Privacy</span>
            <span className="text">Sitemap</span>
            <span className="text">EPR Compliance</span>
          </div>
          <div className="social">
            <span className="title">SOCIAL</span>
            <span className="text">Facebook</span>
            <span className="text">Twitter</span>
            <span className="text">YouTube</span>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="right">
          <div className="mail">
            <span className="title">Mail Us:</span>
            <div className="text">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </div>
          </div>
          <div className="address">
            <span className="title">Registered Office Address:</span>
            <div className="text">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
              CIN : U51109KA2012PTC066107
              <br />
              Telephone: 1800 202 9898
            </div>
          </div>
        </div>
      </div>
      <div className="hori-line"></div>
      <div className="footer-bottom">
        <div className="item">
          <img src="assets/footer-sell.svg" alt="" />
          <span className="text">Sell On Flipkart</span>
        </div>
        <div className="item">
          <img src="assets/footer-advertise.svg" alt="" />
          <span className="text">Advertise</span>
        </div>
        <div className="item">
          <img src="assets/footer-gift-card.svg" alt="" />
          <span className="text">Gift Cards</span>
        </div>
        <div className="item">
          <img src="assets/footer-help.svg" alt="" />
          <span className="text">Help Center</span>
        </div>
        <span className="copy-text text">© 2007-2021 Flipkart.com</span>
        <img className="cards" src="assets/cards.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
