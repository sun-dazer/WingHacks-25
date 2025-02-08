"use client"

import { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  caseType: string;
  setCaseType: (caseType: string) => void;
  location: string;
  setLocation: (location: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [caseType, setCaseType] = useState<string>('');

  return (
    <UserContext.Provider value={{ name, setName, caseType, setCaseType, location, setLocation }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};