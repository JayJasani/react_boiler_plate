/* eslint-disable no-unused-vars */
import isLocalStorageAvailable from "utils/Storage/isLocalStorageAvailable";
import * as notification from "store/notification";

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "auth/login/fulfilled":
      store.dispatch({
        type: "user/authenticateUser",
        payload: { ...action.payload.data },
      });
      next(action);
      break;
    case "auth/logout":
      store.dispatch({
        type: "user/reset",
      });
      next(action);
      break;

    case "auth/login/rejected" ||
      "notification/showErrorNotification" ||
      "coupons/deletecoupon/rejected" ||
      "coupons/getcoupons/rejected" ||
      "coupons/updatecoupon/rejected" ||
      "deals/getdeals/rejected" ||
      "notification/showErrorNotification":
      store.dispatch({
        type: "notification/showErrorNotification",
        payload: {
          msg: action.error.message,
          NotificationType: notification.NOTIFICATION_TYPE.ERROR,
        },
      });
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
