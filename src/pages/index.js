import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import SEO from "../components/seo";
import Page from '../components/page';
import Image from '../components/image';
import { LinkButton } from '../components/buttons';
import { font, color, device } from '../components/constants';

const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  @media ${device.laptop} {
      max-width: 800px;
      grid-template-columns: 1fr 1fr;
  }
  @media ${device.desktop} {
      max-width: 1400px;
      grid-template-columns: 1fr 1fr;
  }
`
const Header = styled.h1`
  line-height: 2.5rem;
  font-family: ${font.header};

  @media ${device.laptop} {
    line-height: 3rem;
  }
`
const Description = styled.h6`
  line-height: 1.5rem;
  font-weight: 400;
  font-size: 1em;
  
  @media ${device.laptop} {
    line-height: 1.5rem;
  }
`
const Feature = styled.li`
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 600;
  list-style-type: '👉';
  padding-inline-start: 1ch;
`

const ButtonCaption = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 0.8em;
  color: ${color.shadow};
`

const renderFeature = (feature, key) => {
  return <Feature key={key}>{feature}</Feature>
}

const IndexLayout = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "index.md"}) {
        childMarkdownRemark {
          frontmatter {
            features
            version
            changelog
            source
          }
        }
      }
    }
  `);

  let data = query.file.childMarkdownRemark.frontmatter;

  return (
    <Page>
      <SEO title="Fokus"/>
      <Content>
        <div>
          <Header>Always be reminded of what needs to be done.</Header>
          <Description>Fokus is an open source app that helps you be reminded of your tasks and events from school; so that, you won't miss them.</Description>
  
          <div>{ 
              data.features ? <ul>{ data.features.map((item, index) => { return renderFeature(item, index) } ) }</ul> : <div></div> 
          }</div>
          <LinkButton text={`Download APK`} targetLink={data.source}/>
          <ButtonCaption>{`Version ${data.version}`}</ButtonCaption>
        </div>
        <Image/>
      </Content>
    </Page>
  );
}

export default IndexLayout
