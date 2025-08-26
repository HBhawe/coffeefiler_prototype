export function NavBar({username, isAuthenticated}) {
    return (
        <div className="navbar">
            <div className="title">
                <span>CoffeeFiler</span>
            </div>
            <div className="function-buttons">
                <button className="navbar-toggler" type="button">
                    Register
                </button>
                <button className="navbar-toggler" type="button">
                    Login
                </button>
                {isAuthenticated ? (
                    <button className="navbar-toggler" type="button">
                        {username}'s profile
                    </button>
                ) : null}
            </div>
        </div>
    );
}