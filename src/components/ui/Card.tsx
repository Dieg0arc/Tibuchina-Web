import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
  const baseClasses = 'bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl'
  const hoverClasses = hover ? 'transition-all duration-300 hover:bg-white/20 hover:scale-105' : ''

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Card
