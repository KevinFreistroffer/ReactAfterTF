import * as React from 'react';
import { StyledCard } from './Project.styled';
import { CardContent, CardActions } from '@material-ui/core';
import { SRLWrapper } from 'simple-react-lightbox';
import { IProject } from '../../../../interfaces/Project';
import SimpleReactLightbox from 'simple-react-lightbox';
import { returnCommaSeparatedStrings } from '../../../../utility';
import { ImageCaption, Caption, ImgContainer } from './Project.styled';

export const Project = (props: IProject) => {
  return (
    <StyledCard>
      <CardContent>
        <ul className='full-width'>
          <li className='project-name mb-l1'>{props.projectName}</li>
          <li className='technologies'>
            <strong>Technologies:</strong>{' '}
            {returnCommaSeparatedStrings(props.technologies)}
          </li>
          <li className='description'>
            <strong>About:</strong> {props.description}
          </li>
        </ul>
        <div className='screenshots full-width justify-flex-start'>
          <strong className='mb-l1'>Screenshots:</strong>
          <SimpleReactLightbox>
            <SRLWrapper className='flex'>
              {props.screenshots.length &&
                props.screenshots.map(
                  (s: { src: string; alt: string }, index: number) => {
                    const { src, alt, caption } = props.screenshots[index];
                    return (
                      <ImageCaption className='image-caption'>
                        <ImgContainer>
                          <img src={`${src}`} alt={alt} />
                        </ImgContainer>
                        <Caption className='caption mt-l2'>{caption}</Caption>
                      </ImageCaption>
                    );
                  }
                )}
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </CardContent>
      {props.URL && (
        <CardActions>
          <a href={props.URL} target='_blank' rel='noreferrer'>
            Visit website
          </a>
        </CardActions>
      )}
    </StyledCard>
  );
};

export default Project;