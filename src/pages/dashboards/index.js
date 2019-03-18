import React from "react";
import { graphql } from "gatsby";
import Page from "../../components/Page";
import withRoot from "../../utils/withRoot";

import TheTabs from '../../components/mines/dashboardtabs'

const Dashboard = props => {
  console.log('in index')
  console.log(props.data)
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
