import * as React from 'react';
import { Container } from './ContactMe.styled';
import PageHeader from '../../components/PageHeader';

import { useTranslation } from 'react-i18next';

export interface IErrorProps {
  //children: React.ReactNode;
}

export const ContactMe = (props: IErrorProps) => {
  const { t } = useTranslation();
  return (
    <Container className='flex-column justify-content-flex-start  align-items-center'>
      <PageHeader>
        <h1>Contact Me</h1>
      </PageHeader>
      <main>
        <ul>
          <li>
            {t('page_content.contact_me.Email', 'Email')}
            :&nbsp;kevin.freistroffer@gmail.com
          </li>
          <li>
            {t('page_content.contact_me.LinkedIn', 'LinkedIn')}:&nbsp;
            <a
              href='https://www.linkedin.com/in/kevin-freistroffer-963600159/'
              target='_blank'
              rel='noreferrer'
            >
              https://www.linkedin.com/in/kevin-freistroffer-963600159/
            </a>
          </li>
        </ul>
      </main>
    </Container>
  );
};

export default ContactMe;
