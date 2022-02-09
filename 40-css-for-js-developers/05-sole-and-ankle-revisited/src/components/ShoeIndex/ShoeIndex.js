import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndexBreadcrumbs = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
  </Breadcrumbs>
);

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <div>
          <TabletBreadcrumbs>
            <ShoeIndexBreadcrumbs />
          </TabletBreadcrumbs>
        </div>
        <Header>
          <Title>Running</Title>
          <Sort>
            <Select
              label="Sort"
              value={sortId}
              onChange={ev => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </Sort>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbs>
          <ShoeIndexBreadcrumbs />
        </DesktopBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const TabletBreadcrumbs = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const DesktopBreadcrumbs = styled.div`
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tabletAndDown} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

const Sort = styled.div`
  @media ${QUERIES.mobileAndDown} {
    display: none;
  }
`;

export default ShoeIndex;
