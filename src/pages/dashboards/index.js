import React from "react";
import { Link, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Rocket } from "mdi-material-ui";
import withRoot from "../../utils/withRoot";
import { withPrefix } from "gatsby";

import TheTabs from '../../components/mines/dashboardtabs'

const Dashboard = props => {
  const data = props.data.allBcannualcoalproductionCsv.edges
  return (
    <Page title="Dashboards">
      
      <TheTabs data={data}></TheTabs>
      
      

    </Page>
  );
};


export const CsvQuery = graphql`
  query {
    allBcannualcoalproductionCsv {
     edges{
       node{
         Year
         Coal_tonnes
         Coal_value_C
       }
     }
   }
 }
`


export default withRoot(Dashboard);
