import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className="container navbar">
                <Link className="navbar_element" to="/">First</Link>
                <Link className="navbar_element" to="/second">Second</Link>
                <Link className="navbar_element" to="/third">Third</Link>
            </header>

            <main className="container">
                <Outlet/>
            </main>

            <footer className="container footer">AndyLy Project</footer>
        </>
    )
}

export {Layout}
