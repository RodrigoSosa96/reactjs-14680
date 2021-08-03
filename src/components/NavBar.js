import CartWidget from "./CartWidget";


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
export default NavBar
