import React, { useState, useEffect } from 'react'
import AppNavigator from './app/navigation/AppNavigator'
import { AuthContext } from './app/auth/context'
import authStorage from './app/auth/storage'

export default function App() {
    const [user, setUser] = useState()
    const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user: any = await authStorage.getUser()
    if (user) setUser(user)
  }

  useEffect(() => {
    restoreUser()
  }, [])
    
    // if (!isReady)
    //     return <AppLoading />

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AppNavigator />
    </AuthContext.Provider>
  )
}
