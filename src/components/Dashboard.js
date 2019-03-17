import React, { Component } from 'react';

// Import widgets being used in this component
//import NumberWidgetContainer from './NumberWidgetContainer';
//import ListWidgetContainer from './ListWidgetContainer';
//import GraphWidgetContainer from './GraphWidgetContainer';
import CustomLineGraphWidgetContainer from './CustomLineGraphWidgetContainer';
//import PieChartWidgetContainer from './PieChartWidgetContainer';

// Add in styles
import '../styles/App.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="App">
            
                {/* Add Widgets to display */}
                {/*
                <ListWidgetContainer href="http://localhost:3001/mines/getdata?filename=aa_minelist_top10_by_tailings.json" heading="Top Mines by Tailings Count" rowspan={3} />
                
                    <NumberWidgetContainer href="http://localhost:3001/mines/visited" heading="Mines Visited YTD" rowspan={1} colspan={1} />
                <NumberWidgetContainer href="http://localhost:3001/mines/inspected" heading="Mines Inspected YTD" rowspan={1} colspan={1} />
                <NumberWidgetContainer href="http://localhost:3001/mines/investigated" heading="Investigations Initiated" rowspan={1} colspan={1} />
                
            
                <PieChartWidgetContainer href="http://localhost:3001/mines/byregion" heading="Mines By Region"/>
                
                <GraphWidgetContainer href="http://localhost:3001/ines/overtime" heading="Mines Opened over time" colspan={2} rowspan={2} />
                
                
               */} 
                <CustomLineGraphWidgetContainer href="http://localhost:3001/mines/getdata?filename=mines-permits-by-major.json" heading="Permits issued by Major/Minor" colspan={3} rowspan={2}/>
               
            </div>

);
    }
}

export default Dashboard;