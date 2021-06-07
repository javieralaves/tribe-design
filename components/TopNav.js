import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    height: 64px;
    align-items: center;
    padding: 0rem 3rem;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDE4;
`;

const Logo = styled.h1`
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
`;

const NavLink = styled.a`
    font-size: 14px;
    padding: 1rem 1rem;
    cursor: pointer;
`;

const TopNav = () => {
    return (
        <Nav>
            <div>
                <Logo>Chakra UI Community</Logo>
            </div>
            <div>
                <NavLink>Search</NavLink>
                <NavLink>Add</NavLink>
                <NavLink>Notifications</NavLink>
                <NavLink>Help</NavLink>
                <NavLink>Profile</NavLink>
            </div>
        </Nav>
    )
}

export default TopNav
