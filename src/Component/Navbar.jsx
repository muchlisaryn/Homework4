import { Link } from "react-router-dom"
import Button from "./Button"

export default function Navbar () {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Qtemu</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="#">Create Meetup</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="#">Explore</Link>
                    </li>
                    <li class="nav-item dropdown">
                    </li>
                </ul>
                <Button text={'Login'} />
                </div>
            </div>
</nav>
</>
    )
}