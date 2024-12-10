import Star from "./Star";
import { StarsProps } from "../TSC/StarsProps";

function Stars({ count = 0 }: StarsProps) {
  if (typeof count !== "number" || count < 1 || count > 5) {
    return null;
  }

  const allStars = Array.from({ length: count }, (_, index) => (
    <Star key={index} />
  ));
  return (
    <ul className="card-body-stars u-clearfix">
      {allStars.map((star, index) => (
        <li key={index}>{star}</li>
      ))}
    </ul>
  );
}

export default Stars;
