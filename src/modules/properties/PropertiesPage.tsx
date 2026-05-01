import { useProperties } from "./hooks/useProperties"


const PropertiesPage = () => {

  const { data, isLoading, error } = useProperties()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {data.map((property) => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PropertiesPage