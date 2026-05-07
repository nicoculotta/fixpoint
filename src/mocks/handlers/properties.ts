import { delay, http, HttpResponse } from 'msw'
import { properties, type Property } from '../db/properties'

export const getProperties = http.get('/api/properties', async ({ request }) => {
  await delay(500)

  const url = new URL(request.url)
  const search = url.searchParams.get('search')
  let filtered = properties

  if (search) {
    const q = search.toLowerCase()
    filtered = properties.filter(
      (property) =>
        property.name.toLowerCase().includes(q) ||
        property.address.toLowerCase().includes(q) ||
        property.city.toLowerCase().includes(q)
    )
  }
  return HttpResponse.json(filtered)

})


export const getPropertyById = http.get('/api/properties/:id',
  async ({ params }) => {
    await delay(300)
    const property = properties.find(
      (p) => p.id === params.id
    )

    if (!property) {
      return HttpResponse.json(
        { message: 'Property not found' },
        { status: 404 }
      )
    }
    return HttpResponse.json(property)
  }
)


export const createProperty = http.post(
  '/api/properties',
  async ({ request }) => {
    await delay(700)

    const body = await request.json()

    const newProperty = {
      id: crypto.randomUUID(),
      ...(body as unknown as Property),
      createdAt: new Date().toISOString(),
    }

    properties.push(newProperty)

    return HttpResponse.json(newProperty, {
      status: 201,
    })
  }
)

export const updateProperty = http.patch(
  '/api/properties/:id',
  async ({ params, request }) => {
    await delay(500)

    const body = await request.json()

    const index = properties.findIndex(
      (p) => p.id === params.id
    )

    if (index === -1) {
      return HttpResponse.json(
        { message: 'Property not found' },
        { status: 404 }
      )
    }

    properties[index] = {
      ...properties[index],
      ...(body as unknown as Property),
    }

    return HttpResponse.json(properties[index])
  }
)


export const deleteProperty = http.delete(
  '/api/properties/:id',
  async ({ params }) => {
    await delay(500)

    const index = properties.findIndex(
      (p) => p.id === params.id
    )

    if (index === -1) {
      return HttpResponse.json(
        { message: 'Property not found' },
        { status: 404 }
      )
    }

    properties.splice(index, 1)

    return new HttpResponse(null, {
      status: 204,
    })
  }
)

export const propertyHandlers = [
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
]