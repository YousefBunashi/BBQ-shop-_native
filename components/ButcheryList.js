import { observer } from "mobx-react";
import React from "react";

import ButcheryItem from "./ButcheryItem";
import butcheryStore from "./stores/ButcheryStore";

import { Content, List, Spinner } from "native-base";

const ButcheryList = () => {
  if (butcheryStore.loading) return <Spinner />;
  const butcheryList = butcheryStore.butcheries.map((butchery) => (
    <ButcheryItem butchery={butchery} key={butchery.id} />
  ));

  return (
    <Content>
      <List>{butcheryList}</List>
    </Content>
  );
};

export default observer(ButcheryList);
