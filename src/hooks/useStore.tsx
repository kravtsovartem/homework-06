import StoreContext from '@/contexts/StoreContext'
import { useContext } from 'react'

const useStore = () => useContext<IStore>(StoreContext)

export default useStore
