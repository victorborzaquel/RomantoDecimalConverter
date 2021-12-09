import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Inputs = styled.View``;

export const InputWrapper = styled.View`
  align-items: center;
  height: 90px;
  background-color: #EEE;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const InputTitle = styled.Text`
  padding-top: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  `;

export const Input = styled.TextInput`
  flex: 1;
  width: 100%;
  text-align: center;
  padding: 0 10px;
  font-size: 36px;
`;