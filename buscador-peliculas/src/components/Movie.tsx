import { type Movie } from "../types";

interface Props {
  title: string;
  img: string;
  year: string;
}

const Movie: React.FC<Props> = ({ title, img, year }) => {
  return (
    <li className="movie" style={{ textAlign: "center" }}>
      <h4>{title}</h4>
      <p>{year}</p>
      <img src={img} alt={title} />
    </li>
  );
};

export default Movie;
