import './App.css';
import {Paper} from '@mui/material';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import QBETextField from './QBETextField';


function App() {
  let pageData = { //putting this here just for the sake of putting it somewhere!
    "insuredName": "myTestInsured",
    "isInsuredValidated": true,
    "brokerName": "myTestBroker",
    "isBrokerValidated": false,
    "inceptionDate": "2022-01-12T00:00:00Z",
    "expiryDate": "2023-01-11T23:59:59Z",
    "policyRef": "xxxxTestRef-123",
    "contractApproved": true
  }
  return (
    <Container>
      <Paper elevation={8} style={{padding:"10px", margin: "10px"}}>
        <Row>
          <Col xs={2} style={{marginTop:"6px", marginBottom:"5px"}}>
            <b>Insured Name: </b>
          </Col>
          <Col xs={6}>
            <QBETextField tickColor="green" ticked={pageData.isInsuredValidated} disabled={true} value={pageData.insuredName}/>
          </Col>
        </Row>

        <Row>
          <Col xs={2} style={{marginTop:"6px", marginBottom:"5px"}}>
            <b>Broker Name:</b>
          </Col>
          <Col xs={6}>
            <QBETextField tickColor="green" ticked={pageData.isBrokerValidated} disabled={true} value={pageData.brokerName}/>
          </Col>
        </Row>
		
        <Row>
          <Col xs={2} style={{marginTop:"6px", marginBottom:"5px"}}>
            <b>Policy Reference: </b>
          </Col>
          <Col xs={6}>
            <QBETextField tickColor="blue" ticked={pageData.contractApproved}  disabled={true} value={pageData.policyRef}/>
          </Col>
        </Row>
        

      </Paper>
    </Container>
    
  );
}

export default App;
