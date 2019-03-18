import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import PieChartWidget from '../PieChartWidget'
import { graphql } from "gatsby";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'stretch',
    color: theme.palette.text.secondary,
  },
});

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}


function GridDashboard1(props) {
  const { classes } = props;
  console.log('in index');
  console.log(props.data);
  const data = props.data; //.allMajorminesummaryCsv.edges
  //var piechartdata = groupBy(data, 'Related_Parties' )
  //console.log(piechartdata)
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
        <PieChartWidget heading={props.heading} colspan={props.colspan} rowspan={props.rowspan} data={props.data} />
        
        </Paper>
        <Paper>
        <PieChartWidget heading={props.heading} colspan={props.colspan} rowspan={props.rowspan} data={props.data} />

        </Paper>
        <Paper>
        <PieChartWidget heading={props.heading} colspan={props.colspan} rowspan={props.rowspan} data={props.data} />

        </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>xs=9</Paper>
        </Grid>
        
        
      </Grid>

      <Paper className={PropTypes.root}>
      <Table className={PropTypes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Coal - Tonnes </TableCell>
            <TableCell align="right">Monetary Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {data.map(row => (
            <TableRow key={row.node.Yearc}>
              <TableCell component="th" scope="row">
                {row.node.Year}
              </TableCell>
              <TableCell align="right">{row.node.Coal_tonnes}</TableCell>
              <TableCell align="right">{row.node.Coal_value_C}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

export const majorminesquery = graphql`
  query {
    
    allMajorminesummaryCsv {
     edges {
         node{
           Name
           Related_Parties
           Tailings
           Count_Active_Expected
         }
     }
   }
  }
`

GridDashboard1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridDashboard1);
