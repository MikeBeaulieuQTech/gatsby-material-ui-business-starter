import React from 'react'
import MinesChart from './mineschart'

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class DashboardAnnualCoalComponent extends React.Component {
  constructor(props) {
    super(props)
    this.inValue = ''
    this.state = {
      mines: props.value.data,
      isFilter: false,
      isLoading: false,
      error: null,
    }
  }

  draw_data() {
    const data = this.state.mines.slice(0, 10)
    const labels = data.map(c => c.node.Year)

    const fdata = data.map(c => c.node.Coal_tonnes)
    const achart = (
      <MinesChart id="minestest" name="mines" labels={labels.reverse()} data={fdata.reverse()} />
    )
    return achart
  }


  render() {
    const data = this.state.mines
    return (
      
      <div className="box boxshadow">
        <div className="box margin-top">
        {this.draw_data()}
        </div>

        <Paper className={PropTypes.root}>
      <Table className={PropTypes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
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


    )
  }
}


/* SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
 */
export default withStyles(styles)(DashboardAnnualCoalComponent);

