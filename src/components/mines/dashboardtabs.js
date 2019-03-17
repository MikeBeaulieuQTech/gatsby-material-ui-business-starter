import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import DashboardAnnualCoalComponent from '../../components/mines/dashboardannualcoalproduction'
import GridDashboard from '../../components/mines/griddashboard'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  constructor(props) {
    super(props)
    
    this.inValue = ''
    this.state = {
      value: 0,
      data: props.data,
      isFilter: false,
      isLoading: false,
      error: null,
    }

  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Historical Coal" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Dashboard Grid" />
            
          </Tabs>
        </AppBar>
        {value === 0 && 
          <TabContainer>
          <DashboardAnnualCoalComponent classes={classes} value={this.state} ></DashboardAnnualCoalComponent>
        </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && 
          <TabContainer>
            <GridDashboard classes={classes} value={this.state} ></GridDashboard>
          </TabContainer>}
        
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);


