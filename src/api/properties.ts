export async function getProperties(search?: string) {
  const query = search
    ? `?search=${search}`
    : ''

  const res = await fetch(`/api/properties${query}`)

  if (!res.ok) {
    throw new Error('Failed to fetch properties')
  }

  return res.json()
}