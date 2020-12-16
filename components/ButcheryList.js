import { observer } from "mobx-react";
import React from "react";

import ButcheryItem from "./ButcheryItem";
import butcheryStore from "./stores/ButcheryStore";

import { Content, List, Spinner } from "native-base";

const ButcheryList = ({ navigation }) => {
  if (butcheryStore.loading) return <Spinner />;
  const butcheryList = butcheryStore.butcheries.map((butchery) => (
    <ButcheryItem
      butchery={butchery}
      key={butchery.id}
      navigation={navigation}
    />
  ));

  return (
    <Content>
      <List>{butcheryList}</List>
    </Content>
  );
};

export default observer(ButcheryList);
