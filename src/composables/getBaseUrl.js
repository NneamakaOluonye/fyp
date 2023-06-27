export default function useBaseUrl() {
  let baseUrl;

  if (location.href.search('https://test.bernodelimited.com/') > -1) {
    baseUrl = import.meta.env.VITE_APP_URL_LIVE

    // if (location.href.search('renapay-api.') > -1) {
    //   baseUrl =
    //     import.meta.env.VITE_APP_URL_LIVE
    // }
  } else {
    baseUrl = import.meta.env.VITE_APP_URL_DEV
  }

  return {
    baseUrl
  }
}