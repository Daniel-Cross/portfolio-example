import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: rgba(225, 225, 225, 0.8);
  padding: 3em 2em 3em 2em;
  width: 80%;
  margin: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>ABOUT</h1>
      <p>
        I'm baby pour-over hot chicken asymmetrical shabby chic pinterest,
        aesthetic scenester godard meh jean shorts venmo. Pabst edison bulb
        kitsch lyft taxidermy swag kickstarter poutine ennui poke butcher
        letterpress crucifix green juice mumblecore. VHS farm-to-table schlitz,
        artisan pork belly occupy bespoke skateboard godard umami you probably
        haven't heard of them. Gluten-free live-edge vegan, taiyaki tumeric
        ramps scenester ethical artisan fashion axe kombucha bicycle rights
        flexitarian.
      </p>
    </AboutContainer>
  );
};

export default About;
