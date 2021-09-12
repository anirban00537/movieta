import axios from "axios";
import { Message, MessageBox } from "element-ui";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
service.interceptors.request.use(
  (response) => {
    const res = response.data;
    if (res.code !== 20000) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm("Are You sure", "sure?", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return response.data;
    }
  },
  (error) => {
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
export default service;
