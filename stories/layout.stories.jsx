import React from 'react';
import { storiesOf } from '@storybook/react';
import { Column, GlobalStyle, PageContainer, Row } from '../src';

import '../styles/styles.css';

storiesOf('Button', module)
  .add('layout', () => (
    <>
      <GlobalStyle/>
      <PageContainer>
        <Row>
          <Column>Column 1</Column>
          <Column>Column 2</Column>
        </Row>
        <Row>
          <Column>Column 1</Column>
          <Column>Column 2</Column>
          <Column>Column 3</Column>
        </Row>
        <Row>
          <Column>Column 1</Column>
          <Column span={2}>Column 2 with span 2</Column>
        </Row>
        <Row>
          <Column>Column 1 with span 2</Column>
          <Column>Column 2</Column>
          <Column>Column 3</Column>
          <Column>Column 4 with span 3</Column>
          <Column>Column 5</Column>
          <Column>Column 6</Column>
        </Row>
      </PageContainer>
    </>
  ));
