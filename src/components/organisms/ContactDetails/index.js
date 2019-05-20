import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../atoms/tableButton/'
import ReceiptCard from '../../molecules/ReceiptCard'
import Cascader from '../../molecules/cascader'
import { Row, Col, Divider, Card } from 'antd'

const ContactDeatil = props => {
    return (
        <Card style={{ backgroundColor: '#F1F1F3' }}>
            <Row>
                <Col span={6}>
                    <h2>{props.customerData.name}</h2>
                    <h3 style={{ color: '#2699FB' }}>{props.customerData.email}</h3>
                    <h3 style={{ color: '#2699FB' }}>{props.customerData.phoneNumber}</h3>
                </Col>
                <Col span={2} offset={12} >
                    <ButtonIcon icon="form" shape="square" type="primary" />
                </Col>
                <Col span={4}>
                    <Cascader optionArray={props.actionData} placeholder='Action' />
                </Col>
            </Row>
            <h3>ACTIVITY</h3>
            <hr />
            <Row>
                <Col>
                    <h4 style={{ color: '#2699FB' }}>{props.date}</h4>
                </Col>
            </Row>
            <Row>
                {props.receiptCardData ? (
                    props.receiptCardData.map(data => {
                        return (
                            <div>
                                <h4>{data.time}</h4>
                                <ReceiptCard iconType={data.iconType} price={data.price} receiptNo={data.receiptNo} />
                            </div>
                        )
                    })
                ) : (
                        <h1>No Receipt Data</h1>
                    )}

            </Row>
        </Card>
    )
}

export default ContactDeatil;

