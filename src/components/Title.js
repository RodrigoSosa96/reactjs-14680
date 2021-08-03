import { FcMenu } from "react-icons/fc";

const Title = () => {
    return (
        <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
            <a className="no-underline text-grey-darkest hover:text-black">
                Altos Viñedos
            </a>
        </h1>

        <a className="text-black hover:shadow-lg md:hidden">
            <FcMenu/>
        </a>
    </div>
    )
}

export default Title
