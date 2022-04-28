import React, { useState, useEffect } from 'react'
import AppNavigator from './app/navigation/AppNavigator'
import { AuthContext } from './app/auth/context'
import authStorage from './app/auth/storage'

export default function App() {
  const [user, setUser] = useState()

  const restoreUser = async () => {
    const user: any = await authStorage.getUser()
    if (user) setUser(user)
  }

  useEffect(() => {
    restoreUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AppNavigator />
    </AuthContext.Provider>
  )
}
