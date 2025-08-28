import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div classname = "navbar">
            <Link to="/" className="navbarItem">
                <button>
                    Home
                </button>
            </Link>
            <Link to="/calendar" className="navbarItem">
                <button>
                    Calendar
                </button>
            </Link>
            <Link to="/recipes" className="navbarItem">
                <button>
                    Recipes
                </button>
            </Link>
        </div>
    )
}