import * as React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Oodle</a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav>
                    <NavItem eventKey={1} href="MyShows">
                        <div className="navbar-item">My Shows</div>
                    </NavItem>

                    <NavItem eventKey={2} href="#">
                        <div className="navbar-item">Link</div>
                    </NavItem>
                </Nav>
            </Navbar>;
</div>;
    }
}
