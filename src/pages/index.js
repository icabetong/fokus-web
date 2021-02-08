import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from "../components/seo";
import LandingImage from '../components/image';
import { LinkButton } from '../components/buttons';

const renderFeature = (feature, key) => {
  return <li key={key}>{feature}</li>
}

const IndexPage = () => {
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
    <Layout>
      <SEO title="Fokus App"/>
      <div style={{display: `grid`, gridTemplateColumns: `1fr 1fr`}}>
        <div>
          <h1>Always be reminded of what needs to be done.</h1>
          <div>Fokus is an open source app that helps you be reminded of your tasks and events from school; so that, you won't miss them.</div>
  
          <div>
            { 
              data.features ? <ul>{ data.features.map((item, index) => { return renderFeature(item, index) } ) }</ul> : <div></div> 
            } 
          </div>
          <LinkButton text={`Download Fokus ${data.version}`} targetLink={data.source}/>
        </div>
        <LandingImage/>
      </div>
    </Layout>
  );
}

export default IndexPage
