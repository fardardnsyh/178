import React from 'react';
import {
  Container,
  FlexContainer,
  Header,
  LineChartContainer,
  PercentCell,
  PercentTableHeader,
  PieChartContainer,
  QuestionContainer,
  QuestionPercent,
  TableCell,
  TableContainer,
  TableHeader,
  Title,
} from './Reports.styled';
import { Grid } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';

export default function Reports() {
  const lineData = [
    {
      id: 'Пользователи',
      color: '#117DED',
      data: [
        {
          x: 'Пн',
          y: 15,
        },
        {
          x: 'Вт',
          y: 37,
        },
        {
          x: 'Ср',
          y: 53,
        },
        {
          x: 'Чт',
          y: 35,
        },
        {
          x: 'Пт',
          y: 45,
        },
        {
          x: 'Сб',
          y: 20,
        },
        {
          x: 'Вс',
          y: 32,
        },
      ],
    },
  ];

  const pieData = [
    {
      id: 'Поступление',
      label: '55',
      count: '55',
    },
    {
      id: 'О METU',
      label: '22',
      count: '22',
    },
    {
      id: 'Бакалавриат',
      label: '18',
      count: '18',
    },
    {
      id: 'Кафедры',
      label: '12',
      count: '12',
    },
    {
      id: 'Гранты',
      label: '9',
      count: '9',
    },
    {
      id: 'Студентам',
      label: '5',
      count: '5',
    },
  ];

  return (
    <>
      <Title>Отчеты</Title>
      <Grid container columnSpacing={{ xs: 0, sm: 2, md: 3, lg: 4 }}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Container>
            <Header>Количество пользователей</Header>
            <LineChartContainer>
              <ResponsiveLine
                data={lineData}
                colors={{ datum: 'color' }}
                useMesh={true}
                margin={{ top: 30, right: 30, bottom: 30, left: 50 }}
              />
            </LineChartContainer>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Header>Часто задаваемые вопросы</Header>
          <QuestionContainer>
            Как поступить в университет?
            <QuestionPercent>58%</QuestionPercent>
          </QuestionContainer>
          <QuestionContainer>
            Какие есть гранты?<QuestionPercent>20%</QuestionPercent>
          </QuestionContainer>
          <QuestionContainer>
            Сколько стоит учеба?<QuestionPercent>12%</QuestionPercent>
          </QuestionContainer>
          <QuestionContainer>
            Какие есть специальности?<QuestionPercent>10%</QuestionPercent>
          </QuestionContainer>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <Header>Темы, интересующие пользователей</Header>
            <FlexContainer>
              <PieChartContainer>
                <ResponsivePie
                  theme={{
                    labels: {
                      text: {
                        fill: '#fff',
                        fontSize: 14,
                      },
                    },
                  }}
                  data={pieData}
                  margin={{
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10,
                  }}
                  colors="#117DED"
                  value="count"
                  innerRadius={0.65}
                  padAngle={0.7}
                  cornerRadius={4}
                  sortByValue={true}
                  enableArcLabels={true}
                  arcLabelsSkipAngle={20}
                  enableArcLinkLabels={false}
                  activeOuterRadiusOffset={8}
                />
              </PieChartContainer>
              <TableContainer>
                <TableHeader>Наименование</TableHeader>
                <PercentTableHeader>Процент</PercentTableHeader>
                <TableHeader>Запросы</TableHeader>
                <TableCell>Поступление</TableCell>
                <PercentCell>45%</PercentCell>
                <TableCell>55</TableCell>
                <TableCell>О METU</TableCell>
                <PercentCell>20%</PercentCell>
                <TableCell>22</TableCell>
                <TableCell>Бакалавриат</TableCell>
                <PercentCell>15%</PercentCell>
                <TableCell>18</TableCell>
                <TableCell>Кафедры</TableCell>
                <PercentCell>10%</PercentCell>
                <TableCell>12</TableCell>
                <TableCell>Гранты</TableCell>
                <PercentCell>6%</PercentCell>
                <TableCell>9</TableCell>
                <TableCell>Студентам</TableCell>
                <PercentCell>4%</PercentCell>
                <TableCell>5</TableCell>
              </TableContainer>
            </FlexContainer>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
