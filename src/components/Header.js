import { FcMenu } from "react-icons/fc";
import CartWidget from "./CartWidget";

const Title = () =>     
                <div className="flex items-center justify-between mb-4 md:mb-0">
                    <h1 clasNames="leading-none text-2xl text-grey-darkest">
                        <a className="no-underline text-grey-darkest hover:text-black">
                            Altos Viñedos
                        </a>
                    </h1>

                    <a className="text-black hover:shadow-lg md:hidden">
                        <FcMenu/>
                    </a>
                </div>

const NavBar = () => {

    return (
        <nav>
            <ul className="list-reset md:flex md:items-center">
                

                <li className="md:ml-4">
                    <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                    Sobre nosotros
                    </a>
                </li>
                <li className="md:ml-4">
                    <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                    Contacto
                    </a>
                </li>
                <li className="md:ml-4">
                    <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                    Tienda
                    </a>
                </li>
                <CartWidget/>

            </ul>
        </nav>
    )
}

const Header = () => {
    return (
        <div className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
            <Title />
            <NavBar />

        </div>
    )
}

export default Header
