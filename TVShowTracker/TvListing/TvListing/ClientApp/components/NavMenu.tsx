import * as React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Oodle</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>;
        </div>;
    }
}
