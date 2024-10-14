import React, { ReactNode } from 'react';

interface CardListProps {
  children: ReactNode;
}

const CardList: React.FC<CardListProps> = ({ children }) => {
  return (
    <div className="bg-tomato w-full p-4 rounded shadow-md my-2">
      {children}
    </div>
  );
};

export default CardList;
