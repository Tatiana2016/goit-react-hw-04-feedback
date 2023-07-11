import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 4px;
`;

const Message = styled.p`
  margin: 0;
`;

const Notification = ({ message }) => (
  <Wrapper>
    <Message>{message}</Message>
  </Wrapper>
);

export default Notification;
