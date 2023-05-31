import { FC } from 'react';
import { Link } from 'react-router-dom';
interface INoMatchProps {}

export const NoMatch: FC<INoMatchProps> = props => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
};
