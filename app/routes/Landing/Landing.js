import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withPageConfig } from
    '../../components/Layout/withPageConfig';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText, Button
} from '../../components';

const landingContainer = {
    marginTop: '100px',
    textAlign: 'center'

};
const button = {
    marginTop: '50px',
};

const headings = {
    marginTop: '50px',
    fontWeight: 'bold',
    fontSize: '1.75em'
}
const icons = {
    fontSize: '100px'
}
class Landing extends React.Component {
    static propTypes = {
        pageConfig: PropTypes.object
    };

    componentDidMount() {
        const { pageConfig } = this.props;

        pageConfig.setElementsVisibility({
            sidebarHidden: true
        });
    }

    componentWillUnmount() {
        const { pageConfig } = this.props;

        pageConfig.setElementsVisibility({
            sidebarHidden: false
        });
    }


    render() {

        return (

            <Container style={landingContainer} className="center">
                <p style={headings} >
                    Discover how much your friends know you
                </p><br />
                <p className="h5"><b>&quot;iTrend!!&quot;</b> Have Massive Fun with your friends and find out how much they know you!!
                With ITrend you can create your quiz from our categories , share your profile link and see how much your friends knows you! dont worry, itrend is safe and secure</p>

                <Button style={button} color="purple">Register</Button>
                <br />
                <p style={headings}>What you stand to enjoy <i className="fa fa-android mr-2"></i></p>
                <Row>
                    <Col lg={6}>
                        <Card className="mb-3">
                            
                            <CardBody>
                                <span style={icons}>
                            <i  className="fa fa-money" aria-hidden="true"></i></span>
                            <CardTitle tag="h3">
                            Completely Free
                                
                            </CardTitle>
                           iTrend is Completely Free, enjoy yourself at no charge whatsoever. you can setup an account in no time and start trending!
                           </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                    <Card>
                        <CardBody>
                        <span style={icons}>
                        <i className="fa fa-id-badge" aria-hidden="true"></i></span>
                        <CardTitle tag="h3">
                           Friendly UI
                                
                            </CardTitle>
                        itrend is created with a simple yet powerful user interface, to ensure usability and fun!
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container >

        );
    }
}

const ExtendedLanding = withPageConfig(Landing);

export {
    ExtendedLanding as Landing
};