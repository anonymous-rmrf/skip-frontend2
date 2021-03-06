import ROOTURL from "../ROOTURL";
import axios from "axios"

const getUserUrl  = ROOTURL + "/users/"
export const user = (userID) => axios.get(`${ROOTURL}/users/${userID}`)

export const allUsers = () => axios.get(`${ROOTURL}/users`)

export const businessUsers = (businessID) => axios.get(`${ROOTURL}/businesses/${businessID}/users`)

export const customerReceipts = (customerID) => axios.get(`${ROOTURL}/users/${customerID}/receipts`)