import originJSONP from 'jsonp'
// 封装json为promise
export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (error, data) => {
      if (!error) {
        resolve(data)
      } else {
        reject(error)
      }
    })
  })
}

function param (data) {
  let url = []
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url.push(`&${k}=${encodeURIComponent(value)}`)
  }
  return url.join('') ? url.slice(1) : ''
}
