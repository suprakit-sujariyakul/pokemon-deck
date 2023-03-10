import styled from "styled-components";
import { Card, Text, IconToggle } from "@atomic";
import { getCardColorsByPokemonTypes } from "@utilities";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin: 2rem;
`;
const StyledImage = styled.div`
  padding: 1rem;
`;

const PokemonCard = ({ pokemon }) => {
  let navigate = useNavigate();

  const pokemonId = <span>#{pokemon?.id}</span>;
  const bgColors = getCardColorsByPokemonTypes(pokemon?.types);

  const handleOnIconInfoClick = () => {
    navigate(`/pokemon?id=${pokemon?.id}`, { replace: true });
  };

  const icons = (
    <div>
      <IconToggle name="heart" margin={"0 0.3rem 0 0"} />
      <IconToggle
        name="info"
        isColorChange={false}
        onClick={handleOnIconInfoClick}
      />
    </div>
  );

  return (
    <Container>
      <Card
        left={pokemonId}
        right={icons}
        width="10rem"
        padding="1rem"
        borderRadius="0.5rem"
        bgColors={bgColors}
        hoverable
      >
        <StyledImage>
          <img src={pokemon?.image} width={"100%"} height="150px" />
        </StyledImage>
        <Text fontSize="1.2rem">{pokemon?.name}</Text>
      </Card>
    </Container>
  );
};

export default PokemonCard;
