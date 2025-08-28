import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="avbarItem">
                <button>
                    Home
                </button>
            </Link>
            <Link to="/calendar" className="avbarItem">
                <button>
                    Calendar
                </button>
            </Link>
            <Link to="/recipes" className="avbarItem">
                <button>
                    Recipes
                </button>
            </Link>
        </div>
    )
}