import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <Divider />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <VisuallyHidden>Open cart</VisuallyHidden>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <VisuallyHidden>Search</VisuallyHidden>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Open menu</VisuallyHidden>
            <Icon id="menu" />
          </UnstyledButton>
        </MobileNav>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const Divider = styled.div`
  height: 4px;
  background-color: var(--gray-900);
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--gray-300);
  overflow: auto;
`;

const Side = styled.div`
  flex: 1;
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7.4vw - 3.25rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.mobileAndDown} {
    gap: 16px;
  }
`;

export default Header;
