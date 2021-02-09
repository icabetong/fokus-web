import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import SEO from "../components/seo";
import Page from '../components/page';
import Image from '../components/image';
import { LinkButton } from '../components/buttons';
import { Device } from '../components/constants';

const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  @media ${Device.laptop} {
      max-width: 800px;
      grid-template-columns: 1fr 1fr;
  }
  @media ${Device.desktop} {
      max-width: 1400px;
      grid-template-columns: 1fr 1fr;
  }
`

const renderFeature = (feature, key) => {
  return <li key={key}>{feature}</li>
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
          <h1>Always be reminded of what needs to be done.</h1>
          <div>Fokus is an open source app that helps you be reminded of your tasks and events from school; so that, you won't miss them.</div>
  
          <div>{ 
              data.features ? <ul>{ data.features.map((item, index) => { return renderFeature(item, index) } ) }</ul> : <div></div> 
          }</div>
          <LinkButton text={`Download Fokus ${data.version}`} targetLink={data.source}/>
        </div>
        <Image/>
      </Content>
    </Page>
  );
}

export default IndexLayout
