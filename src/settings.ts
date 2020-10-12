export const apiSettings = {
  meshServiceHost: process.env.REACT_APP_MESH_SERVICE_HOST,
  httpProtocol: process.env.REACT_APP_HTTP_PROTOCOL,
  wsProtocol: process.env.REACT_APP_WS_PROTOCOL,
}

export const appSettings = {
  name: 'B1X',
  hostDomain: process.env.REACT_APP_HOST_DOMAIN,
  port: process.env.REACT_APP_PORT,
  basePath: process.env.REACT_APP_BASE_PATH,
}
