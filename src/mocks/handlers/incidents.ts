import { delay, http, HttpResponse } from 'msw'
import { incidents, type Incident } from '../db/incidents'

export const getIncidents = http.get('/api/incidents', async ({ request }) => {
  await delay(500)

  const url = new URL(request.url)
  const search = url.searchParams.get('search')
  let filtered = incidents

  if (search) {
    filtered = incidents.filter((incident) =>
      incident.title.toLowerCase().includes(search.toLowerCase())
    )
  }
  return HttpResponse.json(filtered)

})


export const getIncidentById = http.get('/api/incidents/:id',
  async ({ params }) => {
    await delay(300)
    const incident = incidents.find(
      (i) => i.id === params.id
    )

    if (!incident) {
      return HttpResponse.json(
        { message: 'Property not found' },
        { status: 404 }
      )
    }
    return HttpResponse.json(incident)
  }
)


export const createIncident = http.post(
  '/api/incidents',
  async ({ request }) => {
    await delay(700)

    const body = await request.json()

    const newIncident = {
      id: crypto.randomUUID(),
      ...(body as unknown as Incident),
      createdAt: new Date().toISOString(),
    }

    incidents.push(newIncident)

    return HttpResponse.json(newIncident, {
      status: 201,
    })
  }
)

export const updateIncident = http.patch(
  '/api/incidents/:id',
  async ({ params, request }) => {
    await delay(500)

    const body = await request.json()

    const index = incidents.findIndex(
      (i) => i.id === params.id
    )

    if (index === -1) {
      return HttpResponse.json(
        { message: 'Incident not found' },
        { status: 404 }
      )
    }

    incidents[index] = {
      ...incidents[index],
      ...(body as unknown as Incident),
    }

    return HttpResponse.json(incidents[index])
  }
)


export const deleteIncident = http.delete(
  '/api/incidents/:id',
  async ({ params }) => {
    await delay(500)

    const index = incidents.findIndex(
      (i) => i.id === params.id
    )

    if (index === -1) {
      return HttpResponse.json(
        { message: 'Incident not found' },
        { status: 404 }
      )
    }

    incidents.splice(index, 1)

    return new HttpResponse(null, {
      status: 204,
    })
  }
)

export const incidentHandlers = [
  getIncidents,
  getIncidentById,
  createIncident,
  updateIncident,
  deleteIncident,
]