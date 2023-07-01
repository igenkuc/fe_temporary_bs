import { ReactComponent as StarIcon } from 'src/assets/star.svg';

import { StarItem, StarsList } from './Rating.styles';

const stars = Array(5)
  .fill(1)
  .map((_, ind) => ind);

interface RatingProps {
  selectedRating: number;
  setSelectedRating: (ind: number) => void;
}

export const Rating = ({ selectedRating, setSelectedRating }: RatingProps) => {
  return (
    <StarsList>
      {stars.map((ind) => {
        return (
          <StarItem
            key={ind}
            filled={ind <= selectedRating}
            onClick={() => setSelectedRating(ind)}
          >
            <StarIcon />
          </StarItem>
        );
      })}
    </StarsList>
  );
};