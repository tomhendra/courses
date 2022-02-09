/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="modal">
        <Filler />
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <MobileNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MobileNav>
        <MenuFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </MenuFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--gray-900);
  font-weight: var(--font-weight-medium);
  text-decoration: none
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--secondary);
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const MenuFooter = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`;

const FooterLink = styled.a`
  color: var(--gray-900);
  font-weight: var(--font-weight-medium);
  text-decoration: none
  font-size: 1rem;
  text-transform: uppercase;
`;

export default MobileMenu;
