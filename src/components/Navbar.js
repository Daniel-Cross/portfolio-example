import styled from "styled-components";

const NavContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const NavLink = styled.a`
  // color: ${({ theme }) => theme.text}
  color: black;
  margin: 10px;
  font-size: 12px;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLink>Projects</NavLink>
      <NavLink href="#Contacts">Contact</NavLink>
      <NavLink>Dark</NavLink>
    </NavContainer>
  );
};

export default Navbar;
