import * as React from 'react';
import { Container } from './ContactMe.styled';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';

export interface IErrorProps {
  //children: React.ReactNode;
}

export const ContactMe = (props: IErrorProps) => {
  return (
    <Container className='flex-column justify-content-flex-start  align-items-center'>
      <PageHeader>
        <h1>Contact Me</h1>
      </PageHeader>
      <main></main>
    </Container>
  );
};

export default ContactMe;
