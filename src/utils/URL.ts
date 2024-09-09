/*************************************************
 * CommonSetup
 * @exports
 * URL.ts
 * Created by Abdul on 20/07/2023
 * Copyright © 2023 CommonSetup. All rights reserved.
 *************************************************/

// import {getServer, SERVER_KEY} from './Config';

/**
 * Base URL
 */
export const getBaseURL = () => {
  //   if (getServer() === SERVER_KEY.DEV) {
  //     return 'https://dev-api.thebeynd.com/';
  //   } else if (getServer() === SERVER_KEY.STAGE) {
  //     return 'https://stage-api.thebeynd.com/';
  //   } else if (getServer() === SERVER_KEY.PRODUCTION) {
  //     return 'https://api.thebeynd.com/';
  //   }
  return 'https://dev-api.thebeynd.com/';
};

/**
 * S3 Image url
 */
export const BASE_IMAGE_URL =
  'https://gloversicon.s3.us-west-2.amazonaws.com/icon/';

/**
 * Login and Registration (OAuth)
 */
export const REGISTER = 'v1/auth/register';
export const LOGIN = 'v1/auth/login';
export const GOOGLE_LOGIN = 'v1/auth/googlelogin';
export const FACEBOOK_LOGIN = 'v1/auth/facebooklogin';
export const APPLE_LOGIN = 'v1/auth/applelogin';
export const REFRESH_TOKEN = 'v1/auth/refreshToken';
export const FORGOT_PASSWORD = 'v1/auth/forgot-password';
export const RESET_PASSWORD = 'v1/auth/reset-password';
export const LOGOUT = 'v1/auth/logout';
export const SEND_VERIFY_EMAIL = 'v1/auth/send-verification-email';
export const RESEND_VERIFY_EMAIL = 'v1/auth/resend-verification-code';
export const VERIFY_EMAIL = 'v1/auth/verify-email';
export const VERIFY_RESET_PASSWORD = 'v1/auth/verify-reset';
export const GET_STATES = 'v1/auth/states';
export const GET_CITIES = 'v1/auth/cities';
export const STS_TOKEN = 'v1/auth/getSTSToken';

// User
export const WELCOME = 'v1/user/getWelcomeDetails';
export const DEVICE_LOG = 'v1/user/addDeviceLog';
export const USER_DETAILS = 'v1/user/getUserDetails';
export const CONTENT_RECIPIENT = 'v1/user/getRecipient';
export const GET_TRACERS = 'v1/user/searchTracers';
export const MAP_TRACERS = 'v1/user/subscriberTracersMapping';
export const GET_APP_CONTENT = 'v1/user/getAppContent';
export const GET_DASHBOARD_CONTENT = 'v1/user/getDashboardContents';
export const GET_NOTIFICATION = 'v1/user/getNotifications';
export const GET_NOTIFICATION_COUNT = 'v1/user/countNotifications';
export const MARK_NOTIFICATION = 'v1/user/marknotifications';

// Recipients
export const GET_ALL_RECIPIENT_GROUP = 'v1/user/getGroupDetail/all';
export const ADD_UPDATE_RECIPIENT_GROUP = 'v1/user/addUpdateGroup';
export const GET_ALL_RECIPIENT_LIST_BY_GROUPID =
  'v1/user/getRecipientListByGroup';
export const GET_RELATIONSHIP_LIST = 'v1/user/getRelations';
export const ADD_UPDATE_RECIPIENT = 'v1/user/addUpdateRecipient';
export const GET_RRECIPIENT_BY_ID = 'v1/user/getRecipientDetail';
export const DELETE_RECIPIENT_BY_ID = 'v1/user/deleteRecipient';
export const GET_RECIPIEN_FAMILY_TREE_DATA = 'v1/user/getImmediateFamilyData';
export const VALID_RECIPIENT_EMAIL = 'v1/user/checkIfValidEmail';

// Profile
export const INVITE_PEOPLE = 'v1/user/invitePeople';
export const STORAGE_AND_CONTACT_LIMIT = 'v1/user/getStorageAndContactLimit';
export const FAQ_DATA = 'v1/user/getFAQandAboutUs/faq';
export const ABOUT_US = 'v1/user/getFAQandAboutUs/about';
export const EDIT_PROFILE = 'v1/user/edit-profile';
export const CHANGE_PASSWORD = 'v1/auth/change-password';
export const DEACTIVATE_ACCOUNT = 'v1/user/deactivateAccount';
export const DELETE_ACCOUNT = 'v1/auth/deleteAccount';

// Subscription & Payment
export const GET_SUBSCRIPTION_PLANS = 'v1/payment/getSubscriptionPlans';
export const SEARCH_SUBSCRIPTION_DETAILS =
  'v1/payment/searchSubscriptionDetails';
export const PAYMENT_CHECKOUT = 'v1/payment/checkout';
export const PAYMENT_SUCCESS = 'v1/payment/success';
export const TRANSACTION_HISTORY = 'v1/payment/getTransactionHistory';
export const CANCEL_SUBSCRIPTION = 'v1/payment/cancelSubscription';
export const IN_APP_INITIATE_SUBSCRIPTION = 'v1/payment/initiateSubscription';

// Content
export const ADD_UPDATE_CONTENT = 'v1/content/addUpdateContent';
export const DELIVERY_TIME = 'v1/user/getDeliveryTimingTypes';
export const GET_ALL_CONTENT = 'v1/content/getAllContent';
export const SEARCH_CONTENT = 'v1/content/searchContent';
export const DELETE_CONTENT = '/v1/content/deleteContent';
export const VIEW_ALL_CONTENT = '/v1/content/viewContent';
export const UPLOAD_CONTENT = '/v1/content/uploadContent';

/**
 * Dashboard Related
 */

/**
 * Profile Related
 */
export const STRIPE_PUBLISH_KEY =
  'pk_test_51Mg4p1SE0AvYoP90XRzxzHrmlU3ASMnPrG29FJ06VaExvJG0ZDngKrNVxGAjFysCFWaH8mQuM59kSFNduUDRo6GL00LTxcUzJY';
export const STRIPE_SECRET_KEY =
  'sk_test_51Mg4p1SE0AvYoP905FNC05gjh8axLlzsa8S4IYLofWQZedDCeK9Xg522lriCnBhMTzJlU5mF6h621RbItNkho1ud000A9n3Y61';
