import React, { Component } from "react"
import { connect } from "react-redux"

import Purchase from "../../../src/components/organisms/ItemPurchase"
import {
  stockdiary,
  addPurchase,
  getLocationByID,
  reviewPurchase,
  getPurchaseItems,
  deletePurchase,
  updatePurchase
} from "../../../src/reduxHelper"

import { itemPurchaseData } from "./purchase.data"
import wrapper from "./wrapper"
import uuidv4 from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      purchaseItemTableData: [],
      filteredTableData: [],
      formValue: {},
      test: "test"
    }
  }

  componentDidMount() {
    console.log("purchase state", this.props)
    this.loadPurchaseData()
    this.props.getReviewPurchase()
  }

  handleCreatePurchase = (data, cb) => {
    // data.purchaseID = uuidv4()
    console.log(data)

    // this.setState({ formValue: data.values })
    // console.log(this.state.formValue)
    // this.props
    //   .addPurchase(data)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }

  handleSearch(e) {
    const filteredEvents = this.state.purchaseItemTableData.filter(function(
      data
    ) {
      var pattern = new RegExp(e.target.value, "i")
      return data.vendor.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  reviewAction = pid => {
    this.props.getPurchaseItems(pid)
  }

  getItems = pid => {
    this.props
      .getPurchaseItems(pid)
      .then(res => {
        console.log(res)

        return res
      })
      .catch(err => {
        return [
          {
            cp: "",
            unit: "",
            mrp: "",
            asinstance: ""
          }
        ]
      })
  }

  getFormValue = data => {
    this.setState({ formValue: data }, () => {
      console.log(this.state.formValue)
    })
  }

  render() {
    if (this.props.reviewPurchase.isLoaded)
      return (
        <div>
          <Purchase
            formData={{
              product: this.createProductSelectData(
                this.props.products.response.data
              ),
              location: this.createLocationSelectData(
                this.props.blocations.response.data
              )
            }}
            rowSelection={{}}
            columns={itemPurchaseData.itemPurchaseColumns}
            columnData={this.state.filteredTableData}
            cascaderData={itemPurchaseData.cascaderData}
            pagination={{
              pageSize: 10,
              showLessItems: true,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10", "15", "20"]
            }}
            onSearch={value => this.handleSearch(value)}
            onCreate={(data, cb) => this.handleCreatePurchase(data, cb)}
            reviewPurchaseData={this.props.reviewPurchase.response.data}
            reviewAction={this.reviewAction}
            itemsData={this.props.purchaseItem}
            utilFunc={this.getFormValue}
          />
        </div>
      )
    else return <h1>Loading....</h1>
  }

  createpurchasecolumns(data) {
    let columns = []
    data.map(item =>
      columns.push({
        purchaseItemID: item.purchaseID,
        amount: item.amount,
        date: item.date,
        desription: item.description,
        vendor: item.vendor,
        location: JSON.parse(item.locationunfold).name,
        prefilledValues: item,
        formData: {
          product: this.createProductSelectData(
            this.props.products.response.data
          ),
          location: this.createLocationSelectData(
            this.props.blocations.response.data
          ),
          items: this.props.getPurchaseItems,
          pid: item.purchaseID
        },
        handleFeatures: {
          handleDelete: pid => {
            this.props
              .deletePurchase(pid)
              .then(_ => {
                this.loadPurchaseData()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleUpdate: (data, pid, cb) => {
            this.props
              .updatePurchase(pid, data.values)
              .then(_ => {
                this.loadPurchaseData()
                cb({
                  status: true,
                  message: "Purchase data updated"
                })
              })
              .catch(err => {
                console.log(err)
                cb({
                  status: false,
                  message: "Some Error occured while updating"
                })
              })
          }
        }
      })
    )
    return columns
  }

  loadPurchaseData() {
    this.props.stockdiary().then(data => {
      this.setState({ purchaseItemTableData: this.createpurchasecolumns(data) })
      this.setState({ filteredTableData: this.state.purchaseItemTableData })
    })
  }

  createProductSelectData = data =>
    data.map(item => ({ name: item.name, value: item.productID }))

  createLocationSelectData = data =>
    data.map(item => ({ name: item.name, value: item.blocationID }))
}

const mapStateToProps = state => {
  return {
    stockdiary: state.stockdiary,
    blocations: state.getLocationByID,
    products: state.products,
    reviewPurchase: state.reviewPurchase,
    purchaseItem: state.getPurchaseItems
  }
}

const mapDispatchToProps = dispatch => ({
  stockdiary: () => dispatch(stockdiary.action()),
  addPurchase: data => dispatch(addPurchase.action(data)),
  getReviewPurchase: () => dispatch(reviewPurchase.action()),
  getPurchaseItems: pid => dispatch(getPurchaseItems.action(pid)),
  deletePurchase: pid => dispatch(deletePurchase.action(pid)),
  updatePurchase: (pid, data) => dispatch(updatePurchase.action(pid, data))
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
