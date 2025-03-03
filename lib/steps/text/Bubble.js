import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const maxWidth = width * 0.6;

const Bubble = styled.View`
  background-color: ${props => props.bubbleColor};
  border-top-left-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? '18px' : 0;
    } else if (!isFirst && isLast) {
      return user ? '18px' : 0;
    }
    return '18px';
  }};
  border-top-right-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? 0 : '18px';
    } else if (!isFirst && isLast) {
      return user ? 0 : '18px';
    }
    return '18px';
  }};
  border-bottom-right-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? 0 : '18px';
    } else if (!isFirst && isLast) {
      return '18px';
    }
    return props.user ? 0 : '18px';
  }};
  border-bottom-left-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? '18px' : 0;
    } else if (!isFirst && isLast) {
      return '18px';
    }
    return props.user ? '18px' : 0;
  }};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  margin-right: ${(props) => {
    const { isFirst, showAvatar, user } = props;
    if (!isFirst && showAvatar) {
      return user ? '58px' : '6px';
    } else if (showAvatar) {
      return 0;
    }

    return 0;
  }};
  margin-left: ${(props) => {
    const { isFirst, showAvatar, user } = props;
    if (!isFirst && showAvatar) {
      return user ? '6px' : '58px';
    } else if (showAvatar) {
      return 0;
    }

    return 0;
  }};
  max-width: ${(props) => {
    const { isFirst, showAvatar } = props;
    if (!isFirst && showAvatar) {
      return maxWidth + '58px';
    }

    return maxWidth + 'px';
  }};
  width: ${(props) => {
    const { user } = props;
    return props.user ? 'auto' : '292px';
  }};
  margin-top: ${(props) => {
      const { user } = props;
      return props.user ? '24px' : '0';
  }};
  margin-bottom: ${(props) => {
      const { user } = props;
      return props.user ? '24px' : '12px';
  }};
  min-height: 42px;
`;

export default Bubble;
