import NavBar from "./NavBar";
import Title from "./Title";

const Header = () => {
    return (
        <div className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
            <Title />
            <NavBar />

        </div>
    )
}

export default Header
