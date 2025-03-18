import StoreContext from '@/contexts/StoreContext'
import useStore from '@/hooks/useStore'

interface IContextProviderProps {
  children: React.ReactNode
}

export default function StoreContextProvider({ children }: IContextProviderProps) {
  const context = useStore()

  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
}
