import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2em 0;
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

const Contacts = () => {
  return (
    <FooterContainer id="Contacts">
      <NavLink>
        <GitHubIcon />
      </NavLink>
      <NavLink>
        <LinkedInIcon />
      </NavLink>
    </FooterContainer>
  );
};

export default Contacts;
