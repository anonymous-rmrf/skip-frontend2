import React, { Component } from "react"
import Button from "../../atoms/button"
import Cascader from "../../molecules/cascader2"
import { Row, Col } from "antd"

class PermissionForm extends Component {
  render() {
    const style = {
      btn: {
        position: "absolute",
        bottom: "0",
        width: "100%"
      }
    }

    return (
      <Row type="flex" gutter={4}>
        <Col span={10}>
          <Cascader
            label="Employee"
            optionArray={this.props.formData.employee}
            value={this.props.formData.value.employee}
            handleChange={value =>
              this.props.formData.handleValue(value, "employee")
            }
          />
        </Col>
        <Col span={4}>
          <Button
            value="Submit"
            style={style.btn}
            onClick={this.props.formData.onClick}
          />
        </Col>
      </Row>
    )
  }
}

export default PermissionForm
