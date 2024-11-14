import footerlogo from '../assets/logo.png'


export default function Footer() {

    return (
      <>
        <div className="footer-container">
          <div className="footerlogo">
            <img src={footerlogo} alt="" />
            <h2>Pixabay</h2>
                </div>
                <p>Copyright 2024, All Right Reserved @Pixabay</p>
          <div className="credit">
            <p>Made by @Mahesh4net</p>
          </div>
        </div>
      </>
    );
}