import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Cartsummary from './Cartsummary';

const Navi = ({cart, deleteitem, resetAll}) => {
  return (
    <div>
      <Navbar color="light" light expand="md" className="ml-auto">
        <NavbarBrand href="/">Mall Checker</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {cart.length>0?`Cart- ${cart.length}`:"Empty Cart"}
              </DropdownToggle>
              <DropdownMenu right>
                {cart.length>0?<Cartsummary cart={cart} deleteitem={deleteitem}/>:null}
                <DropdownItem divider />
                <DropdownItem onClick={resetAll}>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Navi