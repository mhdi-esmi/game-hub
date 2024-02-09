import React from "react";
import { Game } from "../hooks/UseGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const CardGame = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="1xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default CardGame;
