import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div classname = "navbar">
            <Link to="/" classname="navbarItem">
                <button>
                    Home
                </button>
            </Link>
            <Link to="/calendar" classname="navbarItem">
                <button>
                    Calendar
                </button>
            </Link>
            <Link to="/recipes" classname="navbarItem">
                <button>
                    Recipes
                </button>
            </Link>
        </div>
    )
}