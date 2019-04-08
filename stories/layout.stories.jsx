import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import {
  Column,
  Container,
  cssFullView,
  cssHeight,
  cssWidth,
  mq,
  PageContainer,
  Row,
} from '../src';

export const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body,
      #root {
        ${cssFullView}
      }
    `}
  />
);

const Card = styled.div`
  background-color: #eee;
  border: 1px solid #ddd;
  display: flex;
  flex: 1;
  padding: 10px;
`;

const Header = styled(Row)`
  background-color: #333;
  color: white;
  flex: 1;
  ${cssHeight(80)}
`;

const Sidebar = styled.div`
  border-right: 1px solid #ddd;
  ${cssWidth(0)}

  ${mq`desktop`} {
    ${cssWidth(250)}
  }
`;

const Body = styled(Row)`
  flex-wrap: nowrap;
  flex: 1;
  height: calc(100% - 80px);
`;

storiesOf('Layout', module)
  .add('with page container', () => (
    <>
      <GlobalStyle />
      <PageContainer>
        <Row>
          <Column>
            <Card>Column 1</Card>
          </Column>
          <Column>
            <Card>Column 2</Card>
          </Column>
        </Row>
        <Row shouldGrow>
          <Column width={450}>
            <Card>Column 1 with 450px width</Card>
          </Column>
          <Column>
            <Card>Column 2</Card>
          </Column>
          <Column>
            <Card>Column 3</Card>
          </Column>
          <Column>
            <Card>Column 4</Card>
          </Column>
        </Row>
        <Row>
          <Column>
            <Card>Column 1</Card>
          </Column>
          <Column span={2}>
            <Card>Column 2 with span 2</Card>
          </Column>
        </Row>
        <Row>
          <Column>
            <Card>Column 1</Card>
          </Column>
          <Column>
            <Card>Column 2</Card>
          </Column>
          <Column>
            <Card>Column 3</Card>
          </Column>
          <Column>
            <Card>Column 4</Card>
          </Column>
        </Row>
        <Row height={200}>
          <Column span={2}>
            <Card>Row with height of 200px; Column 1 with span 2</Card>
          </Column>
          <Column>
            <Card>Column 2</Card>
          </Column>
          <Column>
            <Card>Column 3</Card>
          </Column>
          <Column span={3}>
            <Card>Column 4 with span 3</Card>
          </Column>
          <Column>
            <Card>Column 5</Card>
          </Column>
        </Row>
      </PageContainer>
    </>
  ))
  .add('with header and sidebar', () => (
    <>
      <GlobalStyle />
      <Header>This is Header</Header>
      <Body>
        <Sidebar>
          <Container>
            <Row>
              <Column>This is sidebar</Column>
            </Row>
            <Row>
              <Column>This is sidebar 2</Column>
            </Row>
          </Container>
        </Sidebar>
        <PageContainer
          css={css`
            padding: 10px 10px;
          `}
        >
          <Row>
            <Column>
              <Card>Column 1</Card>
            </Column>
            <Column>
              <Card>Column 2</Card>
            </Column>
          </Row>
          <Row shouldGrow>
            <Column width={450}>
              <Card>Column 1 with 450px width</Card>
            </Column>
            <Column>
              <Card>Column 2</Card>
            </Column>
            <Column>
              <Card>Column 3</Card>
            </Column>
            <Column>
              <Card>Column 4</Card>
            </Column>
          </Row>
          <Row>
            <Column>
              <Card>Column 1</Card>
            </Column>
            <Column span={2}>
              <Card>Column 2 with span 2</Card>
            </Column>
            <Column>
              <Card>Column 3</Card>
            </Column>
          </Row>
          <Row>
            <Column>
              <Card>Column 1</Card>
            </Column>
            <Column>
              <Card>Column 2</Card>
            </Column>
            <Column>
              <Card>Column 3</Card>
            </Column>
            <Column>
              <Card>Column 4</Card>
            </Column>
          </Row>
          <Row height={200}>
            <Column span={2}>
              <Card>Row with height of 200px; Column 1 with span 2</Card>
            </Column>
            <Column>
              <Card>Column 2</Card>
            </Column>
            <Column>
              <Card>Column 3</Card>
            </Column>
            <Column span={3}>
              <Card>Column 4 with span 3</Card>
            </Column>
            <Column>
              <Card>Column 5</Card>
            </Column>
          </Row>
        </PageContainer>
      </Body>
    </>
  ));
