/* eslint-disable */
export class Urls {
    static MPHRMS_API_PREFIX = 'api/v2/';

    // login
    static ADMIN_LOGIN = Urls.MPHRMS_API_PREFIX + 'user/login-admin/';
    static SIGNUP = Urls.MPHRMS_API_PREFIX + 'user/sign-up/';
    static CUSTOMER_LOGIN = Urls.MPHRMS_API_PREFIX + 'user/login-customer/';
    static TOKEN_AUTH = Urls.MPHRMS_API_PREFIX + 'user/token-auth/';
    static CUSTOMER_FETCH_DETAILS = Urls.MPHRMS_API_PREFIX + 'user/fetch-customer-details/';

    //dashboard main page
    static DASHBOARD_DATA = Urls.MPHRMS_API_PREFIX + 'orders/fetch-dashboard/';

    //users
    static HANDLE_CUSTOMER_ACTIONS = Urls.MPHRMS_API_PREFIX + 'user/customer-actions/';
    static INVOICE_UPLOAD = Urls.MPHRMS_API_PREFIX + 'user/invoice-upload/';
    static INVOICE_FETCH = Urls.MPHRMS_API_PREFIX + 'user/invoice-fetch/';
    static INVOICE_FETCH_ADMIN = Urls.MPHRMS_API_PREFIX + 'user/invoice-fetch-admin/';

    static PDF_FETCH = Urls.MPHRMS_API_PREFIX + 'user/pdf-fetch/';

    //orders
    static FETCH_ORDER_DASHBOARD = Urls.MPHRMS_API_PREFIX + 'orders/fetch-order-dashboard/';
    static FETCH_CUSTOMER_ORDER = Urls.MPHRMS_API_PREFIX + 'orders/fetch-customer-order/';
    static FETCH_CUSTOMER_ORDER_ADMIN = Urls.MPHRMS_API_PREFIX + 'orders/fetch-customer-order-admin/';
    static FETCH_CUSTOMER_ORDER_DASH = Urls.MPHRMS_API_PREFIX + 'orders/fetch-customer-order-dash/';
    static ACTION_ORDER_ADMIN = Urls.MPHRMS_API_PREFIX + 'orders/action-order-admin/';
    static FETCH_INQUIRY_DASHBOARD = Urls.MPHRMS_API_PREFIX + 'orders/fetch-pending-query/';
    static ACTION_INQUIRY_ADMIN = Urls.MPHRMS_API_PREFIX + 'orders/action-pending-query/';
    static PLACE_CUSTOMER_ORDER = Urls.MPHRMS_API_PREFIX + 'orders/place-customer-order/';


    //coins
    static COINS_MANAGEMENT = Urls.MPHRMS_API_PREFIX + 'coins/coins-manage/';
    static COINS_REQUEST_CUSTOMER = Urls.MPHRMS_API_PREFIX + 'coins/coins-request-user/';
    static COINS_FETCH_USER = Urls.MPHRMS_API_PREFIX + 'coins/coins-fetch-user/';
    static ADMIN_COINS_REQUEST = Urls.MPHRMS_API_PREFIX + 'coins/coins-fetch-admin/';
    static WALLET_ADMIN_DETAILS = Urls.MPHRMS_API_PREFIX + 'coins/wallet-admin-details/';


    //products management
    static PRODUCTS_FETCH_CUSTOMER = Urls.MPHRMS_API_PREFIX + 'products/fetch-customer-products/';
    static PRODUCTS_FETCH_ADMIN = Urls.MPHRMS_API_PREFIX + 'products/fetch-customer-products-admin/';
    static PRODUCTS_ADD_CUSTOMER = Urls.MPHRMS_API_PREFIX + 'products/add-customer-products/';
    static PRODUCTS_ADMIN_CUSTOMER = Urls.MPHRMS_API_PREFIX + 'products/admin-customer-status/';

    //payment verification
    static PAYMENT_VERIFICATION = Urls.MPHRMS_API_PREFIX + 'payments/api/verify-payment/';
    static TOKEN_GENERATION = Urls.MPHRMS_API_PREFIX + 'payments/api/generate-payment-token/';
    static PAYMENT_CUSTOMER_DASHBOARD = Urls.MPHRMS_API_PREFIX + 'payments/api/fetch-payment-customer-dashboard/';
    static WITHDRAW_REQUEST_CUSTOMER = Urls.MPHRMS_API_PREFIX + 'payments/api/withdraw-request-user/';
    static REDEEM_COUPON = Urls.MPHRMS_API_PREFIX + 'payments/api/redeem-payment-token/';
   
    //order
    static FETCH_CART = Urls.MPHRMS_API_PREFIX + 'orders/get-cart-order/';
    static PLACE_CART_ORDER = Urls.MPHRMS_API_PREFIX + 'orders/place-cart-order/';
    static PLACE_CUSTOMER_CART = Urls.MPHRMS_API_PREFIX + 'orders/place-customer-cart/';
    static CUSTOMER_QUANTITY = Urls.MPHRMS_API_PREFIX + 'orders/place-customer-quantity/';
    static PLACE_ORDER = Urls.MPHRMS_API_PREFIX + 'orders/place-order/';

}
