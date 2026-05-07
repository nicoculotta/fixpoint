

export const InsightCardGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <InsightCardSkeleton />
      <InsightCardSkeleton />
      <InsightCardSkeleton />
      <InsightCardSkeleton />
    </div>
  )
}


const InsightCardSkeleton = () => {
  return (
    <div className="h-45 w-full bg-stone-200 rounded-lg animate-pulse">
    </div>
  )
}