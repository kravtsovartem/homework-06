import AuthContext from "@/contexts/AuthContext"
import useAuth from "@/hooks/useAuth"

interface IAuthProviderProps {
  children: React.ReactNode
}

export default function AuthProvider({ children }: IAuthProviderProps) {
  const context = useAuth()

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}
