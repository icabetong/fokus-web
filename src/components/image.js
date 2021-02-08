import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const LandingImage = () => {
    const data =  useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "screenshot.png" }) {
            childImageSharp {
                fluid(maxWidth: 2048) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Image not found</div>
    }

    return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
}

export default LandingImage