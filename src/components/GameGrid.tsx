import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardGame from "./CardGame";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameGuery } from "../App";

interface Props {
  gameQuery: GameGuery | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={3}
        spacing={3}
      >
        {isLoading &&
          skeleton.map((sk) => (
            <GameCardContainer key={sk}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <CardGame game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
