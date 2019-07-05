import React from "react"
import { Modal, Button, Card, Spin } from 'antd';
import ReceiptDetailsCard from '../receiptDetailsCard'

class ModalDetail extends React.Component {
  state = {
    visible: false,
    loading: true,
    modalData: []
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  multipleClicks = (receiptID) => {
    this.showModal()
    this.props.handleReceiptClick(receiptID, (response) => {
      this.setState({ modalData: response, loading: false })
    })
  }

  render() {
    return (
      <div>
        <div onClick={() => this.multipleClicks(this.props.receiptNo)}>
          {this.props.receiptCard}
        </div>
        <Modal
          width="100vh"
          title="Receipt Details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {!this.state.loading ? (
            <ReceiptDetailsCard
              data={this.state.modalData}
            />
          ) : (
              <div style={{textAlign: "center"}}>
                <Spin />
              </div>

            )}

        </Modal>
      </div>
    );
  }
}

export default ModalDetail