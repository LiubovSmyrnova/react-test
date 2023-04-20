import { Link } from 'react-router-dom';

export default function ButtonLink() {
  return (
    <div>
      <Link to="/about">
        <button>About me page!</button>
      </Link>
    </div>
  );
};
