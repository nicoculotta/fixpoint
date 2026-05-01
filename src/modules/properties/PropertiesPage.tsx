import PropertiesTable from "./components/PropertiesTable"
import { useProperties } from "./hooks/useProperties"


const PropertiesPage = () => {

  const { data, isLoading, error } = useProperties()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>


  return (
    <div>
      <h1>Properties</h1>
      <PropertiesTable properties={data} />
    </div>
  )
}

export default PropertiesPage


