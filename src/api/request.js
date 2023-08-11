import axios from "axios";

// 封装了get方法

axios.defaults.timeout = 10000;

// 配置响应拦截器
// 异常处理

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    }
  }
);

/**
 * @param {object} params
 * @param {function} callback
 */

export function get(url) {
  return function (params, callback) {
    let status = "SUCCESS";
    /* 
    // 直接返回一个axios实例，有一点bug，还没解决
      return axios
      .get(url, {
        params,
      })
      .then((res) => resolve(res))
      .catch((err) => {
        console.log("err: ", err.message);
        status = "FAIL";
      })
      .finally(() => callback && callback(status)); 
    */
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
        })
        .then(
          (res) => resolve(res),
          (reason) => {
            reject(reason);
            console.log("xxxxx", reason);
          }
        )
        .catch((err) => {
          reject(err);
          console.log("err: ");
          status = "FAIL";
        })
        .finally(() => callback && callback(status));
    });
  };
}
