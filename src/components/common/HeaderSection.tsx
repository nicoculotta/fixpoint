interface HeaderSectionProps {
  title: string
  description: string
  actions?: React.ReactNode
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} 
const HeaderSection = ({ title, description, actions, titleAs = 'h1' }: HeaderSectionProps) => {
  return (
    <header className="flex justify-between items-start">
      <div>
        <Tag as={titleAs} className="text-3xl font-bold tracking-tight">{title}</Tag>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        {actions}
      </div>
    </header>
  )
}

export default HeaderSection


const Tag = ({ as, children, ...props }: { as: string, children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => {
  const TagName = as as React.ElementType
  return <TagName {...props}>{children}</TagName> as React.ReactNode
}