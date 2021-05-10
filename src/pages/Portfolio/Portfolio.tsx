import * as React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/PageHeader';
import { Container, Img, Paragraph, ParagraphAndImg } from './Portfolio.styled';
import OrderHistory from '../../imgs/order_history.jpg';
import OrderDetails from '../../imgs/order_details.jpg';
import OrderDetails768 from '../../imgs/order_details_768.jpg';
import OrderDetails576 from '../../imgs/order_details_576.png';
import OrderDetails320 from '../../imgs/order_details_320.png';

import Project from './components/Project';
import { IProject } from '../../interfaces/Project';

export interface IPortfolioProps {}

export const Portfolio = (props: IPortfolioProps) => {
  const { t } = useTranslation();

  const data: Array<IProject> = [
    {
      id: 1,
      projectName: 'Thermofisher',
      technologies: [
        t(
          'page_content.portfolio.project1.technologies',
          'HTML5, CSS3 & SCSS, JavaScript, Reagieren, gestaltete Komponenten, NodeJS, SCRUM, JIRA'
        ),
      ],
      description: t(
        'page_content.portfolio.project1.description',
        'Contributed features, tasks and bug fixes on 3 pages, including responsive design from 320px up to 1440px viewports using custom CSS CDN’s, reusable components we developed, and existing reusable components from existing repositories'
      ),
      URL: undefined,
      screenshots: [
        {
          src: OrderHistory,
          alt: 'Order History - 1440px',
          caption: 'Order History - 1440px',
        },
        {
          src: OrderDetails,
          alt: 'Order Details - 1440px',
          caption: 'Order Details - 1440px',
        },
        {
          src: OrderDetails768,
          alt: 'Order Details - 768px',
          caption: 'Order Details - 768px',
        },
        {
          src: OrderDetails576,
          alt: 'Order Details - 576px',
          caption: 'Order Details - 576px',
        },
        {
          src: OrderDetails320,
          alt: 'Order Details - 320px',
          caption: 'Order Details - 320px',
        },
      ],
    },
    // {
    //   id: 2,
    //   projectName: 'illLive',
    //   technologies: [
    //     'HTML5',
    //     'CSS3',
    //     'JavaScript',
    //     'React',
    //     'styled-components',
    //     'NodeJS',
    //   ],
    //   description: '',
    //   URL: 'https://www.illlive.herokuapp.com',
    //   screenshots: [],
    // },
  ];
  return (
    <Container>
      <PageHeader>
        <h1 className='mb-l3'>{t('page_title.Portfolio', 'Portfolio')}</h1>
      </PageHeader>
      <main>
        {data.map((project: IProject) => (
          <Project {...project}></Project>
        ))}
      </main>
    </Container>
  );
};

export default Portfolio;
