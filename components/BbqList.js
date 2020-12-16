import { observer } from "mobx-react";
import { Content, List, Spinner, View } from "native-base";
import React from "react";

import BbqItem from "./BbqItem";
import bbqsStore from "./stores/bbqStore";

const BbqList = ({ navigation, route }) => {
  if (bbqsStore.loading) return <Spinner />;
  const { butchery } = route.params;
  const bbqList = butchery.bbqs
    .map((bbq) => bbqsStore.getBbqById(bbq.id))
    .map((bbq) => <BbqItem bbq={bbq} key={bbq.id} />);

  return (
    <Content>
      <List>{bbqList}</List>
    </Content>
  );
};
export default observer(BbqList);
