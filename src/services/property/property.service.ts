import type { Property } from './property.types'
import axios from 'axios'

export const PropertyService = {
  getAll: async (search?: string): Promise<Property[]> => {
    const response = await axios.get('/api/properties', {
      params: search ? { search } : undefined,
    })

    if (response.status !== 200) {
      throw new Error('Failed to fetch properties')
    }

    return response.data
  },

  getById: async (id: string): Promise<Property> => {
    const response = await axios.get(`/api/properties/${id}`)

    if (response.status !== 200) {
      throw new Error('Property not found')
    }

    return response.data
  },

  create: async (data: Partial<Property>) => {
    const response = await axios.post('/api/properties', data)

    if (response.status !== 201) {
      throw new Error('Failed to create property')
    }

    return response.data
  },

  update: async (id: string, data: Partial<Property>) => {
    const response = await axios.patch(`/api/properties/${id}`, data)

    if (response.status !== 200) {
      throw new Error('Failed to update property')
    }

    return response.data
  },

  delete: async (id: string) => {
    const response = await axios.delete(`/api/properties/${id}`)

    if (response.status !== 204) {
      throw new Error('Failed to delete property')
    }
  }
}