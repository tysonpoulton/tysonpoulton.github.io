import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState('Front End');

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      { children }
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider;