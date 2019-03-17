import React, { Component } from 'react';


// Import components
import CustomLineGraphWidget from '../dashboards/CustomLineGraphWidget';

class CustomLineGraphWidgetContainer extends Component {
    constructor() {
        super();

        // Set initial state
        this.state = {
            loading: false,
            values: []
        }

        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Fetch data when the component is added
    componentDidMount() {
        this.getData().then(_ => {
            // Re-fetch every minute
            this.interval = setInterval(this.getData, 60000);
        });
    }

    // Fetch new data
    getData() {
        // Tell the Widget component we're currently loading
        this.setState({ loading: true });

    }

    render() {
        return (
            // Render the graph widget
            <CustomLineGraphWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} data={this.state.data} loading={this.state.loading} />
        );
    }
}

// Enforce the type of props to send to this component
CustomLineGraphWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

export default CustomLineGraphWidgetContainer;