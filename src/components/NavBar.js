import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<nav>
			<ul className="list-reset md:flex md:items-center">
				<li className="md:ml-4">
					<NavLink
						activeClassName="bg-red"
						className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
						to="/categoria/Fernet"
					>
						Fernet
					</NavLink>
				</li>
				<li className="md:ml-4">
					<NavLink
						activeClassName="active"
						className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
						to="/categoria/Whisky"
					>
						Whisky
					</NavLink>
				</li>
				<li className="md:ml-4">
					<NavLink
						activeClassName="active"
						className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
						to="/login"
					>
						Login
					</NavLink>
				</li>
				<CartWidget />
			</ul>
		</nav>
	);
};
export default NavBar;
