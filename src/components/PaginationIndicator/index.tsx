import React, { memo } from "react";
import { ContainerArea, Dot } from "./styles";

interface Props {
  totalPages: number;
  currentPage: number;
}

const PaginationIndicator = ({ currentPage, totalPages }: Props) => {
  const dots = [...Array(totalPages).keys()];

  return (
    <ContainerArea>
      {dots.map((dot, index) => (
        <Dot key={dot} isActived={currentPage == index} />
      ))}
    </ContainerArea>
  );
};

export default memo(PaginationIndicator);
