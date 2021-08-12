import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
            <Link to="/" className="no-underline text-grey-darkest hover:text-black">
                Altos Viñedos
            </Link>
        </h1>

        <a className="text-black hover:shadow-lg md:hidden">
            <FcMenu/>
        </a>
    </div>
    )
}

export default Title
