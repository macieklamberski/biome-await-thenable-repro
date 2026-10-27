type Fetch = (url: string) => Promise<string>

interface FetchCall {
  (url: string): Promise<string>
}

// Reported: optional call on an optional named function type.
export const optionalCall = async (fetchFn?: Fetch) => {
  return await fetchFn?.('https://example.com')
}

// Reported: the same type narrowed before the call.
export const narrowed = async (fetchFn: Fetch | undefined) => {
  if (!fetchFn) {
    return
  }

  return await fetchFn('https://example.com')
}

// Reported: an interface with a call signature instead of an alias.
export const callSignature = async (fetchFn?: FetchCall) => {
  return await fetchFn?.('https://example.com')
}

// Not reported: the same function type written inline.
export const inline = async (fetchFn?: (url: string) => Promise<string>) => {
  return await fetchFn?.('https://example.com')
}

// Not reported: the named type without undefined.
export const required = async (fetchFn: Fetch) => {
  return await fetchFn('https://example.com')
}
