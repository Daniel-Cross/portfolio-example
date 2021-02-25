import styled from "styled-components";

const AllProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: items;
  margin: 4em 2em 2em 2em;
`;

const SingleJobContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: items;
`;

const ProjectImg = styled.img`
  width: 50vw;
`;

const Projects = () => {
  return (
    <AllProjectsContainer>
      <h3 style={{ textAlign: "center" }}>PROJECT NAME</h3>
      <SingleJobContainer>
        <ProjectImg src="https://www.codingdojo.com/blog/wp-content/uploads/6.jpg" />
        <p>
          Brunch raw denim mixtape raclette. Asymmetrical narwhal put a bird on
          it, ennui disrupt chillwave hashtag affogato shaman. Heirloom tilde
          PBR&B microdosing, fam marfa flexitarian you probably haven't heard of
          them jean shorts echo park tumeric cornhole meh. Bushwick shabby chic
          direct trade, beard portland pabst distillery crucifix lumbersexual
          post-ironic keffiyeh organic williamsburg. Trust fund blog letterpress
          flexitarian offal, farm-to-table small batch. Portland wayfarers
          hammock four dollar toast truffaut art party literally asymmetrical.
          Affogato kogi fanny pack mustache authentic quinoa subway tile
          chambray four dollar toast palo santo. Banjo migas before they sold
          out bicycle rights shaman banh mi kitsch narwhal activated charcoal
          flannel quinoa gastropub hammock chillwave.
        </p>
      </SingleJobContainer>
    </AllProjectsContainer>
  );
};

export default Projects;
