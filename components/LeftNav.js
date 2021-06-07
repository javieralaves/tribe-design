import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 100%;
    padding: 1rem;
`;

const MenuItem = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: 6px;
    padding-left: 1rem;
    margin-bottom: 0.25rem;
    align-items: center;
    font-size: 14px;
    font-weight: ${props => props.active ?  "500" : "400"};
    background-color: ${props => props.active ?  "#E0E7FF" : "white"};
    color: ${props => props.active ?  "#4F46E5" : "black"};
`;

const LeftNav = () => {
    return (
        <Nav>
            <MenuItem active>Following</MenuItem>
            <MenuItem>Explore</MenuItem>
            <MenuItem>Saved</MenuItem>
        </Nav>
    )
}

export default LeftNav
