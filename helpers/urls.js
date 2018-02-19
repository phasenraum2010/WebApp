import { merge, parseInt } from 'lodash'

const base = `${process.env.baseURL}`

export const buildEndpointURL = (host, options = {}) => {
  options = merge({ protocol: 'http', port: null }, options || {})
  let endpoint = host

  if (host.indexOf('://') < 0 && options.protocol) {
    endpoint = `${options.protocol}://${endpoint}`
  }

  if (parseInt(options.port) > 0 && parseInt(options.port) !== 443 && parseInt(options.port) !== 80) {
    endpoint = `${endpoint}:${options.port}`
  }
  return endpoint
}

export const buildUserUrl = (slug) => {
  return `${base}/profile/${slug}`
}

export const buildContributionUrl = (slug) => {
  return `${base}/contributions/${slug}`
}

export default {
  buildEndpointURL,
  buildUserUrl,
  buildContributionUrl
}
