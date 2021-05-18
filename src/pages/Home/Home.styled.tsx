import { Card } from '@material-ui/core';
import styled, { css } from 'styled-components/macro';

export const SkillSets = css`
  margin-top: 2rem;
`;

export const WorkHistory = css`
  margin-top: 2rem;
`;

export const Container = styled.div`
  height: 100%;
  max-width: 768px;
  margin: 0 auto;

  .skill-sets {
    ${SkillSets}
  }

  .work-history {
    ${WorkHistory}
  }
`;

export const StyledCard = styled(Card)`
  margin-bottom: 1rem;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 240px;
  padding: 0;
  
  border-radius: 0;

  @media only screen and (min-width: 768px) {
    // margin: 0 auto 2rem;
    // border-radius: 5.18rem;
  }
`;
export const Paragraph = styled.p`
  display: block;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
  }

  span {
    display: block;
  }
`;

export const ParagraphAndImg = styled.div<{ reverse?: boolean }>`
  display: flex;
  max-width: 768px;
  margin: 0 auto;
  flex-direction: ${(props) => {
    return props.reverse ? 'column-reverse' : 'column';
  }};

  @media only screen and (min-width: 576px) {
    flex-direction: ${(props) => {
      return props.reverse ? 'row-reverse' : 'row';
    }};
  }
`;
