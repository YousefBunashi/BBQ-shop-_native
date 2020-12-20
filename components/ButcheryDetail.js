import React from "react";
import { observer } from "mobx-react";

import {
  ButcheryDetailImage,
  ButcheryDetailTitle,
  ButcheryDetailWrapper,
} from "../ styles";
import butcheryStore from "./stores/ButcheryStore";
import { Spinner, Text } from "native-base";
import BbqList from "./BbqList";
import bbqsStore from "./stores/bbqStore";

const ButcheryDetail = () => {
  if (butcheryStore.loading || bbqsStore.loading) return <Spinner />;
  const butchery = butcheryStore.butcheries[1];
  console.log(butchery);
  const bbqsFromBbqStore = butchery.bbqs.map((bbq) =>
    bbqsStore.getBbqById(bbq.id)
  );

  return (
    <>
      <ButcheryDetailWrapper>
        <ButcheryDetailImage source={{ uri: butchery.image }} />
        <ButcheryDetailTitle> {butchery.name}</ButcheryDetailTitle>
        <Text>testtet</Text>
        <BbqList bbqs={bbqsFromBbqStore} />
        <Text>testtet</Text>
      </ButcheryDetailWrapper>
    </>
  );
};

export default observer(ButcheryDetail);
