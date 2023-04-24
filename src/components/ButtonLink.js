import { Link } from 'react-router-dom';
//added a button. Got help from this source https://reactrouter.com/en/main/components/link
export default function ButtonLink() {
  return (
    <div> 
      <Link to="/about">
        <button>About me page!</button>
      </Link>
    </div>
  );
};
