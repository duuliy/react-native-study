import axios from 'react-native-axios'
// import { getToken } from './user.js'
import { baseUrl } from './env.js'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

// const token = 'Bearer ' + getToken()
const token = 'Bearer ' + ''

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} type       The type we want to request
 * @param  {string} url       The URL we want to request
 * @param  {object} [params] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

const fetch = (method, url, data) => {
  if (method === 'get') {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + url, {
        headers: {
          'Authorization': token
        }
      })
        .then(checkStatus)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  } else if (method === 'delete') {
    return new Promise((resovle, reject) => {
      axios.delete(baseUrl + url, {
        data: data,
        headers: {
          'Authorization': token
        }
      })
        .then(checkStatus)
        .then(response => {
          resovle(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  } else {
    return new Promise((resovle, reject) => {
      axios({
        method: method,
        url: baseUrl + url,
        data: data,
        headers: {
          'Authorization': token
        }
      })
        .then(checkStatus)
        .then(response => {
          resovle(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default fetch
