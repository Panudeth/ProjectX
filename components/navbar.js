import Reace ,{ Component } from 'react'
import Link from 'next/link'
import '../static/css/nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavbarMain extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render () {
        const nav = {
            height : '100px',
            position: 'relative',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.63)',
            borderBottom: '2px solid rgba(100, 89, 255, 0.466)',
            color: '#fff'
        }
        const navA = {
            color: '#fff',
            fontWeight: '100',
            letterSpacing: '5px'
        }
        const menu = {
            margin: 'auto 15px auto auto',
            color: '#fff',
            fontSize: '18px',
            letterSpacing: '2px'
        }
        return (
            <div>
                <Navbar light expand="md" style={nav}>
                    <div className="container">
                        <NavbarBrand href="/"><h2 style={navA}>Hotel</h2></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mx-auto" navbar>
                                <NavItem>
                                    <NavLink style={menu} className="text-white"><Link className="menuLink" href="/">Home</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={menu} className="text-white"><Link className="menuLink" href="/about">About Us</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={menu} className="text-white" href="/service">Service</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle style={menu} className="text-white" nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className="text-black">
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem className="text-black">
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem className="text-black">
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}



export default NavbarMain