export enum RequestMethods {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

export async function handleResponseError(response: Response) {
  let data
  try {
    data = await response.json()
  } catch (error) {
    throw new Error(response.statusText)
  }

  const message = data.message || response.statusText
  throw new Error(message)
}

export async function fetchit(input: RequestInfo, init?: RequestInit | undefined): Promise<Response> {
  const options: RequestInit = init || {}
  const defaultHeaders: HeadersInit = { 'Content-Type': 'application/json' }

  options.headers = Object.assign(defaultHeaders, options.headers)

  const response = await fetch(input, options)

  if (!response.ok) {
    await handleResponseError(response)
  }

  return response
}
