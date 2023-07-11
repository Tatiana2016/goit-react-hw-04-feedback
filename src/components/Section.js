import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Section = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Section;
