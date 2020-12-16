import { Icon, Text } from "native-base";
import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
`;
export const OverLayContainer = styled.View`
  flex: 1;
`;
export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;
export const ButcheryItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

export const ButcheryDetailWrapper = styled.View`
  margin-top: 50;
`;

export const ButcheryDetailImage = styled.Image`
  width: 150;
  height: 150;
`;

export const ButcheryDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
`;
export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
export const CartButtonStyled = styled(Icon)`
  color: ${(props) => props.theme.backgroundColor};
  margin-right: 10px;
`;
export const CartTextStyled = styled(Text)`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 20px;
`;
export const TrashIcon = styled(Icon)`
  color: ${(props) => props.theme.red};
`;
export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #84cca2;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const AddButtonText = styled.Text`
  color: white
  font-weight: bold;
  font-size: 14px;
`;
export const AddButton = styled.TouchableOpacity`
  align-items: center;
  padding: 15px;
  background-color: red;
  margin-top: 10px;
`;
