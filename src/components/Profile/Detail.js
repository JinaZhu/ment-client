import React from "react";

import { DetailContainer, DetailWrapper, DetailData, DataType } from "./styled";

const Detail = ({ type, data }) => {
  return (
    <DetailContainer>
      <DataType>{type}</DataType>
      <DetailWrapper>
        <DetailData>{data}</DetailData>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default Detail;
