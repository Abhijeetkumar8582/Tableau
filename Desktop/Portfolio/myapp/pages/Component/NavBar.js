
import Link from 'next/link'

function NavBar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-center" id="navbarSupportedContent" >
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <Link class="nav-link active" href="#">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/Product/product">Expirence</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
