import axios from "axios"
import type { Incident } from "./incident.types"

export const IncidentService = {
  getAll: async (search?: string): Promise<Incident[]> => {
    const query = search
      ? `?search=${search}`
      : ''

    const response = await axios.get(`/api/incidents${query}`)
    if (response.status !== 200) {
      throw new Error('Failed to fetch properties')
    }

    return response.data
  },

  getById: async (id: string): Promise<Incident> => {
    const response = await axios.get(`/api/incidents/${id}`)
    if (response.status !== 200) {
      throw new Error('Failed to fetch property')
    }

    return response.data
  },

  create: async (data: Partial<Incident>) => {
    const response = await axios.post('/api/incidents', data)
    if (response.status !== 201) {
      throw new Error('Failed to create incident')
    }

    return response.data
  },

  update: async (id: string, data: Partial<Incident>) => {
    const response = await axios.patch(`/api/incidents/${id}`, data)
    if (response.status !== 200) {
      throw new Error('Failed to update incident')
    }

    return response.data
  },

  delete: async (id: string) => {
    const response = await axios.delete(`/api/incidents/${id}`)
    if (response.status !== 204) {
      throw new Error('Failed to delete incident')
    }
  },
  getDataInsights: async () => {
    const response = await axios.get('/api/incidents/analytics/insights')
    if (response.status !== 200) {
      throw new Error('Failed to fetch insights')
    }

    console.log(response.data)

    return response.data
  }
}