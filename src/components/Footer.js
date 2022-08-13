import icon from "../asset/github.png";

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright @ {new Date().getFullYear()} BigsizeJ <img src={icon}></img>
      </p>
    </footer>
  );
};

export default Footer;
