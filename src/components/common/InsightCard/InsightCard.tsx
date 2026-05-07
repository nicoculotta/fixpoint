import './InsightCard.css'

interface InsightCardProps {
  icon: React.ReactNode
  title: string
  value: string
  description?: string
  bgColor?: string
  textColor?: string
}


const InsightCard = ({ icon, title, value, description = '', bgColor = 'bg-white', textColor = 'text-stone-900' }: InsightCardProps) => {
  return (
    <div className={`insight-card ${bgColor} ${textColor}`}>
      <div className="flex items-center justify-end">
        <div className="insight-card-icon">
          {icon}
        </div>
      </div>
      <p className="text-5xl mb-2">{value}</p>
      <h3 className="text-md">{title}</h3>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}

export default InsightCard