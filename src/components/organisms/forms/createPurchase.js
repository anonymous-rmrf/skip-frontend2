import React, { Component } from "react"
import { Form, Checkbox, Text, Select } from "../../../utils/xinformed"
import { ArrayField } from "informed"
import { Button } from "antd"
import { Row, Col } from "antd"

class createPurchase extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.setFormApi = this.setFormApi.bind(this)
  }

  handleClick() {
    this.props.onSubmit(this.formAPi.getState())
  }

  setFormApi(formAPi) {
    this.formAPi = formAPi
  }

  render() {
    const style = {
      margin: { marginBottom: "10px" },
      dynamicForm: { marginTop: "20px", marginBottom: "20px" }
    }

    const initialFormVal = {
      items: [
        {
          cp: "",
          unit: "",
          mrp: ""
        }
      ]
    }

    return (
      <div className="App">
        <Form getApi={this.setFormApi} initialValues={initialFormVal}>
          <Text field="vendor" placeholder="Vendor" style={style.margin} />
          <Text
            field="description"
            placeholder="Description"
            style={style.margin}
          />
          <Select
            field="location"
            placeholder="Location"
            option={[{ name: "", value: "" }]}
            style={style.margin}
          />
          <Text field="amount" placeholder="Amount" style={style.margin} />

          <div style={style.dynamicForm}>
            <ArrayField field="items">
              {({ add, fields }) => (
                <div>
                  <Button
                    onClick={() => {
                      add()
                    }}
                    style={style.margin}
                  >
                    Add Items
                  </Button>

                  {fields.map(({ field, key, remove }, i) => (
                    <label key={key}>
                      <Row gutter={4}>
                        <Col span={8}>
                          <Text
                            field={`${field}.cp`}
                            placeholder="Cost Price"
                            style={style.margin}
                          />
                        </Col>
                        <Col span={8}>
                          <Text
                            field={`${field}.units`}
                            placeholder="Units"
                            style={style.margin}
                          />
                        </Col>
                        <Col span={8}>
                          <Text
                            field={`${field}.mrp`}
                            placeholder="MRP"
                            style={style.margin}
                          />
                        </Col>
                        <Col span={12}>
                          <Button onClick={remove}>Remove</Button>
                        </Col>
                      </Row>
                    </label>
                  ))}
                </div>
              )}
            </ArrayField>
          </div>
        </Form>
        <div style={{ display: "inline-block" }}>
          <Button
            style={{ float: "left", width: 192 }}
            onClick={this.props.onCancel}
          >
            Cancel
          </Button>
          <Button
            style={{ float: "left", width: 192, marginLeft: 15 }}
            type="primary"
            onClick={this.handleClick}
          >
            Save
          </Button>
        </div>
      </div>
    )
  }
}

export default createPurchase
