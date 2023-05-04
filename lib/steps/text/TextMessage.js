import styled from 'styled-components/native';

const TextMessage = styled.Text`
  color: ${props => props.fontColor};
  fontFamily: ${props => props.fontFamily};
  font-size: 16px;
`;

export default TextMessage;
