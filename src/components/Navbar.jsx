import React from 'react';

const Navbar = ({ handleSearch }) => {
    return (
        <header className="p-3 border-bottom bg-gray">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
                    <a href="/" className="d-flex align-items-center mb-2 text-dark mb-lg-0 link-body-emphasis text-decoration-none">
                        <strong style={ { fontSize: 30 }}>RecipeApp</strong>
                    </a>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={handleSearch}
                        />
                    </form>

                    <div class="dropdown text-end">
                        <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle text-dark" data-bs-toggle="dropdown" aria-expanded="false">
                           <b>MORE INFO</b>
                        </a>
                        <ul class="dropdown-menu text-small">
                            <li><a class="dropdown-item" href="#">AboutUs</a></li>
                            <li><a class="dropdown-item" href="#">ContactUs</a></li>
                            <li><a class="dropdown-item" href="#">F & Q</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
