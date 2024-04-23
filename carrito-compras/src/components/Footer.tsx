interface Props {
  handleLimit: () => void;
}

const Footer: React.FC<Props> = ({ handleLimit }) => {
  return (
    <footer className="container-fluid">
      <button className="secondary" onClick={handleLimit}>
        Cargar mas
      </button>
    </footer>
  );
};

export default Footer;
