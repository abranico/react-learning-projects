import { type Movie } from "../types";

interface Props {
  title: string;
  img: string;
  year: string;
}

const Movie: React.FC<Props> = ({ title, img, year }) => {
  return (
    <li>
      <h3>
        {title} - {year}
      </h3>
      <img src={img} alt={title} />
    </li>
  );
};

export default Movie;
