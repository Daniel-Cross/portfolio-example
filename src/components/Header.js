import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderContainer = styled.div`
  height: 100vh;
`;

const HeroImage = styled.img`
  height: 15em;
  width: 15em;
  object-fit: contain;
  border-radius: 50%;
`;

const HeroContainer = styled.div`
  padding: 6em 0 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <HeroContainer>
          <HeroImage src="https://i.pinimg.com/originals/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.png" />
          <h1>PENELOPE SMITH</h1>
          <h2>SOFTWARE ENGINEER</h2>
        </HeroContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
