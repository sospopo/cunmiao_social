let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://172.16.10.24:8085'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://' + window.location.host + '/ma2'
}

export {baseUrl}
