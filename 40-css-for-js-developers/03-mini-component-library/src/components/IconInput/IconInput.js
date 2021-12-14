import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    iconSize: 16,
    iconStrokeWidth: 1,
    borderWidth: 1,
    paddingLeft: 24,
    fontSize: 14,
  },
  large: {
    height: 36,
    iconSize: 24,
    iconStrokeWidth: 2,
    borderWidth: 2,
    paddingLeft: 36,
    fontSize: 18,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  children,
}) => {
  const styles = STYLES[size];
  return (
    <Wrapper style={{ '--width': width }}>
      <IconWrapper style={{ '--iconSize': styles.iconSize }}>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.iconStrokeWidth}
        />
      </IconWrapper>
      <VisuallyHidden>
        <label htmlFor="input">{label}</label>
      </VisuallyHidden>
      <NativeInput
        id="input"
        placeholder={placeholder}
        style={{
          '--height': styles.height,
          '--borderWidth': styles.borderWidth,
          '--paddingLeft': styles.paddingLeft,
          '--fontSize': styles.fontSize,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(var(--width) * 1px);
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 0px;
  height: calc(var(--iconSize) * 1px);
  width: calc(var(--iconSize) * 1px);
`;

const NativeInput = styled.input`
  border: none;
  box-shadow: none;
  width: 100%;
  height: calc(var(--height) * 1px);
  color: ${COLORS.black};
  font-size: calc(var(--fontSize) / 16 * 1rem);
  border-bottom: ${COLORS.black} solid;
  border-width: calc(var(--borderWidth) * 1px);
  padding-left: calc(var(--paddingLeft) * 1px);
`;

export default IconInput;
