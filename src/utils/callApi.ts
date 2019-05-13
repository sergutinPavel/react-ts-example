export default function callApi(method: string, url: string, path: string, data?: any) {
  // TODO: change to axios or something else
  return fetch(url + '/api' + path, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}
