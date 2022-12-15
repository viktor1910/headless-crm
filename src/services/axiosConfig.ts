import axios, { AxiosError } from 'axios';

const axiosWrapper = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
});

axiosWrapper.interceptors.response.use(undefined, function (error: AxiosError): Promise<ComposedError> {
  let handleGlobally;
  if (error.isAxiosError) {
    handleGlobally = () => handleAxiosError(error);
  } else {
    handleGlobally = () => handleOtherError(error);
  }
  return Promise.reject({ ...(typeof error === 'string' ? { error } : error), handleGlobally });
});

export interface ComposedError extends AxiosError {
  handleGlobally(): void;
}

const handleOtherError = (error: any) => {
  if (typeof error === 'string') {
    // notifier.error(error);
  } else if (error.message) {
    // notifier.error(error.message);
  } else {
    console.error(error);
  }
};

const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    // error.message = error.response.data.message ? error.response.data.message : error.message;
    if (!error.message) {
      const statusCode = error.response ? error.response.status : null;
      switch (statusCode) {
        case 401:
          error.message = 'You are not authorized to access this resource';
          break;
        case 403:
          error.message = "You don't have permission to access the resource";
          break;
        case 404:
          error.message = 'The requested resource does not exist or has been deleted';
          break;
        default:
          error.message = error.message ? error.message : 'Something went wrong and request was not completed';
      }
    }
    console.error(error.config?.url, error?.response.status, error.message);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    error.message = 'Network error, please check your network connectivity and try again';
    console.error('Network Error', error.config?.url, error.code, error);
  } else {
    // Something happened in setting up the request that triggered an Error
    error.message = 'Client error found, not able to create the http request, please refresh and try again';
    console.error('Client Error', error.config?.url, error.code, error);
  }
  // notifier.error(error.message);
};

export default axiosWrapper;
