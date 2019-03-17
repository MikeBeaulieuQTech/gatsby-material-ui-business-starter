import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import components
import Widget from './Widget';

//Import graphing component
import { Pie } from 'react-chartjs-2';


class PieChartWidget extends Component {
    constructor(props) {
        super(props);

        // Set the initial state for the graphing component
        this.state = {
            values: {
                labels: ["S/W", "N/W", "N/E"],
                datasets: [{
                    "data":[300,50,100],
                    "backgroundColor": [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                        ],
                    "hoverBackgroundColor": [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"]
                    }]
            }
            
        }
    }

    // Update the state based on changing props
    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            //Only update if the data has actually changed
            this.generateDatasets(nextProps);
        }
    }

    //Convert the data received in props to a format the graphing component likes
    generateDatasets(props) {
        let datasets = [];
        console.log(props);

        //Create a dataset object that Chart.js to understand
        props.data.forEach(function (data) {
            datasets.push({
                label: data.label,
                data: data.data,
                fill: false,
                tension: 0,
                borderColor: data.color,
                borderWidth: 8,
                pointRadius: 0,
                pointHitRadius: 10
            });
        }, this);

        //Let the React wrapper for Chart.js update the view
        this.setState({
            values: {
                datasets
            }
        });
    }

    render() {
        return (
            // Wrap the graphing component in the generic wrapper
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                <div className="GraphWidget">
                    <Pie data={this.state.values} options={this.state.chartOptions} />
                </div>
            </Widget>
        );
    }
}

// Enforce the type of props to send to this component
PieChartWidget.propTypes = {
    heading: PropTypes.string,
    colspan: PropTypes.number,
    rowspan: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object)
}

export default PieChartWidget;