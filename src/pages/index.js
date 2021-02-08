import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from "../components/seo";
import LandingImage from '../components/image';

const renderFeature = (feature) => {
  return <li>{feature}</li>
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "index.md"}) {
        childMarkdownRemark {
          frontmatter {
            features
          }
        }
      }
    }
  `);

  let features = data.file.childMarkdownRemark.frontmatter.features;
  let version = data.file.childMarkdownRemark.frontmatter.version;

  return (
    <Layout>
      <SEO/>
      <div style={{display: `grid`, gridTemplateColumns: `1fr 1fr`}}>
        <div>
          <h1>Always be reminded of what needs to be done.</h1>
          <div>Fokus is an open source app that helps you be reminded of your tasks and events from school; so that, you won't miss them.</div>
  
          <div>
            { 
              features ? <ul>{ features.map(feature => renderFeature(feature)) }</ul> : <div></div> 
            } 
          </div>
          <button>{version}</button>
        </div>
        <LandingImage/>
      </div>
    </Layout>
  );
}

export default IndexPage
