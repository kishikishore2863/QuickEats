import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-bold">QuickEats</h1>
        </div>
        <div>
          <ul>
            <Link>About</Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
