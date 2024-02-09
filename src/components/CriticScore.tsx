import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const scoreColor = score > 90 ? "green" : score > 85 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={scoreColor}
      fontSize="14px"
      paddingX={1}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
