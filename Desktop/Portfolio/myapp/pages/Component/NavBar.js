
import Link from 'next/link'

function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light" style={{ backgroundColor: "#FDA260" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/" style={{ color: "white" }}>Abhi</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-center" id="navbarSupportedContent" >
                        <ul className="nav justify-content-center ">
                            <li className="nav-item">
                                <Link className="nav-link active mx-2" href="/Component/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" href="/Component/Experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" href="/Component/Project">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
