import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../utils/withRoot";

const styles = theme => ({
    root: {
      fontWeight: "bold",
    },
  }),
  Home = props => {
    const products = props.data.allMarkdownRemark.edges;
    return (
      <Page title="Mines Data Hub">

        <HomeFeatures />
        <Grid
          spacing={24}
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
        >

        </Grid>
      </Page>
    );
  };

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
