import "./styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--info">
        <h2>Movies.info</h2>

        <div className="footer--attribution">
          <div className="footer--attribution--api">
            <a
              href="https://www.themoviedb.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
                alt="tmdb logo"
              />
            </a>
            <p>
              This product uses the TMDB API but is not endorsed or certified by
              TMDB.
            </p>
          </div>
          <p>
            Made with ❤️ by <a href="https://github.com/arshWebDev">Arsh</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
