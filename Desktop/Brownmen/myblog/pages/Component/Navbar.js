import Link from "next/link"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" href="/Component/Category">Top Exercise</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" href="/Component/Post">Eat Healthy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" href="/Component/Post">Live well</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" href="/Component/Post">Yoga</Link>
              </li>

            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar