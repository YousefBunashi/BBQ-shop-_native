import React from "react";
import { observer } from "mobx-react";

import {
  ButcheryDetailImage,
  ButcheryDetailTitle,
  ButcheryDetailWrapper,
} from "../ styles";
import butcheryStore from "./stores/ButcheryStore";
import { Spinner } from "native-base";

const ButcheryDetail = () => {
  const butchery = butcheryStore.butcheries[0];
  if (butcheryStore.loading) return <Spinner />;
  return (
    <ButcheryDetailWrapper>
      <ButcheryDetailImage source={{ uri: butchery.image }} />
      <ButcheryDetailTitle> {butchery.name}</ButcheryDetailTitle>
    </ButcheryDetailWrapper>
  );
};

export default observer(ButcheryDetail);
