import HeaderSection from "@/components/common/HeaderSection"
import { Button } from "@/components/ui/button"
import InsightCardGrid from "./components/InsightCardGrid"
import { Plus } from "lucide-react"
import { useInsights } from "./hooks/useInsights"
import { InsightCardGridSkeleton } from "./components/InsightCardGridSkeleton"
import { useIncidents } from "./hooks/useIncidents"
import IncidentsTable from "./components/IncidentsTable"

const IncidentsPage = () => {

  const { data: insightsData, isLoading, error } = useInsights()
  const { data: incidentsData, isLoading: isIncidentsLoading, error: incidentsError } = useIncidents()
  if (error || incidentsError) return <div>Error: {error?.message || incidentsError?.message}</div>

  return (
    <div>
      <HeaderSection title="Incidentes" description="Administra las incidencias de tus propiedades" actions={<Button role="toolbar" aria-label="Nueva Incidencia" variant="default"><Plus className="h-4 w-4 text-white" /> Nueva Incidencia</Button>} />

     {isLoading ? <InsightCardGridSkeleton /> : <InsightCardGrid data={insightsData} />}
     {isIncidentsLoading ? null : <IncidentsTable incidents={incidentsData} onIncidentSelect={() => {}} />}
    </div>
  );
};

export default IncidentsPage;