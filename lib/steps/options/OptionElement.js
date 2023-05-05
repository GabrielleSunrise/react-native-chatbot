import styled from 'styled-components/native';

const OptionElement = styled.View`
  background-color: ${props => props.bubbleColor};
  padding-top: 8px;
  padding-right: 20px;
  padding-bottom: 8px;
  padding-left: 20px;
  border-radius: 22px;
`;

export default OptionElement;
