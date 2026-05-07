import InsightCard from '@/components/common/InsightCard/InsightCard'
import { Building, CalendarX2, CircleEllipsis, ClockCheck } from 'lucide-react'

interface InsightCardGridProps {
  data: {
    totalIncidents: number
    totalPending: number
    totalInProgress: number
    totalOverDue: number
  }
}

const InsightCardGrid = ({ data }: InsightCardGridProps) => {
  const insights = [
    {
      icon: <Building className="h-5 w-5" />,
      title: 'Total Incidentes',
      value: data.totalIncidents,
      bgColor: 'bg-white',
    },
    {
      icon: <CircleEllipsis className="h-5 w-5" />,
      title: 'Pendientes',
      value: data.totalPending,
      bgColor: 'bg-white',
    },
    {
      icon: <ClockCheck className="h-5 w-5" />,
      title: 'En Progreso',
      value: data.totalInProgress,
      bgColor: 'bg-white',
    },
    {
      icon: <CalendarX2 className="h-5 w-5" />,
      title: 'Atrasados',
      value: data.totalOverDue,
      bgColor: 'bg-white',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {insights.map((insight) => (
        <InsightCard
          key={insight.title}
          icon={insight.icon}
          title={insight.title}
          value={insight.value.toString()}
          bgColor={insight.bgColor}
        />
      ))}
    </div>
  )
}

export default InsightCardGrid
