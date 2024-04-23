import type { Product } from "../types";

type Props = Product;

const Product: React.FC<Props> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
      <p>{category}</p>
      <p>
        {rating.count} - {rating.rate}
      </p>
    </li>
  );
};

export default Product;
