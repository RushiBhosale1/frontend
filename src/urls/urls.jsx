/* eslint-disable */

import { HttpAxiosService } from './httpService';
import { Urls } from './constantsUrls';
import { test_url } from 'src/config/environment';

const project = new HttpAxiosService(test_url);

export const loginUserAdmin = (payload_data) => {
  return project.post(Urls.ADMIN_LOGIN, payload_data);
};

export const signUpUser = (payload_data) => {
  return project.post(Urls.SIGNUP, payload_data);
};
export const customerLogin = (payload_data) => {
  return project.post(Urls.CUSTOMER_LOGIN, payload_data);
};
export const tokenAuth = (payload_data) => {
  return project.post(Urls.TOKEN_AUTH, payload_data);
};


//dashboard
export const dashboardFetchDetails = (payload_data) => {
  return project.get(Urls.DASHBOARD_DATA, payload_data);
};

export const userFetchDetails = (payload_data) => {
  return project.get(Urls.CUSTOMER_FETCH_DETAILS, payload_data);
};



//customer handling
export const handleCustomerActions = (payload_data) => {
  return project.post(Urls.HANDLE_CUSTOMER_ACTIONS, payload_data);
};
export const handleCustomerCoinsRequest = (payload_data) => {
  return project.post(Urls.COINS_REQUEST_CUSTOMER, payload_data);
};



//order handling
export const fetchAllOrdersAdmin = (payload_data) => {
  return project.get(Urls.FETCH_ORDER_DASHBOARD, payload_data);
};
export const fetchCustomerOrders = (payload_data) => {
  return project.get(Urls.FETCH_CUSTOMER_ORDER, payload_data);
};
export const fetchAdminOrders = (payload_data) => {
  return project.get(Urls.FETCH_CUSTOMER_ORDER_ADMIN, payload_data);
};
export const fetchCustomerOrdersDash = (payload_data) => {
  return project.get(Urls.FETCH_CUSTOMER_ORDER_DASH, payload_data);
};
export const adminOrderActions = (payload_data) => {
  return project.post(Urls.ACTION_ORDER_ADMIN, payload_data);
};
export const fetchAllInquiryAdmin = (payload_data) => {
  return project.get(Urls.FETCH_INQUIRY_DASHBOARD, payload_data);
};
export const adminInquiryActions = (payload_data) => {
  return project.post(Urls.ACTION_INQUIRY_ADMIN, payload_data);
};
export const InvoiceUpload = (payload_data) => {
  return project.multiPartFormData(Urls.INVOICE_UPLOAD, payload_data);
};
export const InvoiceFetch = (payload_data) => {
  return project.get(Urls.INVOICE_FETCH, payload_data);
};
export const InvoiceFetchAdmin = (payload_data) => {
  return project.get(Urls.INVOICE_FETCH_ADMIN, payload_data);
};
export const fetchPdfFile = (payload_data) => {
  return project.get(Urls.PDF_FETCH, payload_data);
};
export const placeCustomerOrder = (payload_data) => {
  return project.post(Urls.PLACE_CUSTOMER_ORDER, payload_data);
};




// coins management
export const coinManage = (payload_data) => {
  return project.post(Urls.COINS_MANAGEMENT, payload_data);
};
export const coinsFetch = (payload_data) => {
  return project.get(Urls.COINS_FETCH_USER, payload_data);
};
export const adminCoinsRequest = (payload_data) => {
  return project.get(Urls.ADMIN_COINS_REQUEST, payload_data);
};



// products management
export const productFetchCustomer = (payload_data) => {
  return project.get(Urls.PRODUCTS_FETCH_CUSTOMER, payload_data);
};
export const placeCartItems = (payload_data) => {
  return project.get(Urls.PRODUCTS_FETCH_CUSTOMER, payload_data);
};
export const productFetchProductsAdmin = (payload_data) => {
  return project.get(Urls.PRODUCTS_FETCH_ADMIN, payload_data);
};
export const productAddCustomer = (payload_data) => {
  return project.multiPartFormData(Urls.PRODUCTS_FETCH_CUSTOMER, payload_data);
};
export const productStatusAdmin = (payload_data) => {
  return project.post(Urls.PRODUCTS_ADMIN_CUSTOMER, payload_data);
};


// payments management
export const paymentVerification = (payload_data) => {
  return project.multiPartFormData(Urls.PAYMENT_VERIFICATION, payload_data);
};
export const adminWalletDetails = (payload_data) => {
  return project.get(Urls.WALLET_ADMIN_DETAILS, payload_data);
};
export const tokenGeneration = (payload_data) => {
  return project.post(Urls.TOKEN_GENERATION, payload_data);
};
export const paymentCustomerDashboard = (payload_data) => {
  return project.get(Urls.PAYMENT_CUSTOMER_DASHBOARD, payload_data);
};
export const paymentCustomerWithdraw = (payload_data) => {
  return project.post(Urls.WITHDRAW_REQUEST_CUSTOMER, payload_data);
};
export const paymentCustomerRedeem = (payload_data) => {
  return project.post(Urls.REDEEM_COUPON, payload_data);
};



export const fetchCart = (payload_data) => {
  return project.get(Urls.FETCH_CART, payload_data);
};
export const placeFetchCart = (payload_data) => {
  return project.post(Urls.PLACE_CART_ORDER, payload_data);
};
export const cartQuantity = (payload_data) => {
  return project.post(Urls.CUSTOMER_QUANTITY, payload_data);
};
export const placeOrder = (payload_data) => {
  return project.post(Urls.PLACE_ORDER, payload_data);
};

