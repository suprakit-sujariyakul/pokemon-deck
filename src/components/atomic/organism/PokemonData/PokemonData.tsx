import styled from "styled-components";
import { Text } from "@atomic";
import { Row, Col } from "antd";

const Content = styled.div`
  background-color: #ffffff40;
  border-radius: 1.2rem;
  padding: 1rem;
`;

const PokemonData = ({ pokemon }) => {
  return (
    <div>
      <Text>About</Text>
      <Content>
        <Text fontSize="0.8rem">{pokemon?.about}</Text>
      </Content>
      <Text>Abilities</Text>
      <Content>
        {pokemon?.abilities.map(({ ability }) => {
          return (
            <div key={ability?.name}>
              <Text fontSize="0.8rem">- {ability?.name}</Text>
            </div>
          );
        })}
      </Content>
      <Text>Base Stats</Text>
      <Content>
        <Row>
          {pokemon?.stats.map(({ base_stat, stat }, idx) => {
            return (
              <Col key={idx} xs={12} sm={12}>
                <Text fontSize="0.8rem">
                  {stat?.name} - {base_stat}
                </Text>
              </Col>
            );
          })}
        </Row>
      </Content>
    </div>
  );
};

export default PokemonData;
