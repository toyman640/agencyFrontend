import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const FirstCompO = () => (
  <div>
    <Row>
      <Col lg={3} md={6} sm={12}>
        <Card className="Card">
          <Card.Body>
            <Card.Text>
              <div className="CardInner">
                <FontAwesomeIcon className="CardIcon" icon={faScrewdriverWrench} />
                <p>
                  <CountUp end={86} duration={2} start={0} separator="," />
                </p>
              </div>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">PROJECTS COMPLETED</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
        <Card className="Card">
          <Card.Body>
            <Card.Text>
              <div className="CardInner">
                <FontAwesomeIcon className="CardIcon" icon={faScrewdriverWrench} />
                <p>
                  <CountUp end={7} duration={2} start={0} separator="," />
                </p>
              </div>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">ONGOING COMPLETED</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
        <Card className="Card">
          <Card.Body>
            <Card.Text>
              <div className="CardInner">
                <FontAwesomeIcon className="CardIcon" icon={faScrewdriverWrench} />
                <p>
                  <CountUp end={7} duration={2} start={0} separator="," />
                </p>
              </div>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">LOCAL PROJECTS</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
        <Card className="Card">
          <Card.Body>
            <Card.Text>
              <div className="CardInner">
                <FontAwesomeIcon className="CardIcon" icon={faScrewdriverWrench} />
                <p>
                  <CountUp end={7} duration={2} start={0} separator="," />
                </p>
              </div>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted text-center">FOREGIN PROJECTS</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default FirstCompO;
