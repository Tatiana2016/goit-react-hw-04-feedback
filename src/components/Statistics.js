import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h3`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Item = styled.p`
  margin-bottom: 5px;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  console.log('good:', good);
  console.log('neutral:', neutral);
  console.log('bad:', bad);
  console.log('total:', total);
  console.log('positivePercentage:', positivePercentage);

  return (
    <Container>
      <Title>Статистика:</Title>
      <Item>Добре: {good}</Item>
      <Item>Нейтрально: {neutral}</Item>
      <Item>Погано: {bad}</Item>
      <Item>Загальна кількість відгуків: {total}</Item>
      <Item>Відсоток позитивних відгуків: {positivePercentage}%</Item>
    </Container>
  );
};

export default Statistics;
