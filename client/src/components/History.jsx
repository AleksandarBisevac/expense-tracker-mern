import React from 'react';
import { TiDelete } from 'react-icons/ti';

const obj = [
  {
    color: 'yellow',
    name: 'savings',
  },
  {
    color: 'purple',
    name: 'investment',
  },
  {
    color: 'light-red',
    name: 'expense',
  },
];

const History = () => {
  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {obj.map((item, idx) => (
        <Transaction category={item} key={idx} />
      ))}
    </div>
  );
};

export default History;

function Transaction({ category }) {
  if (!category) return null;
  return (
    <div
      className={`item flex justify-center bg-gray-50 py-2 rounded-r`}
      style={{
        borderRight: `8px solid var(--color-${category.color ?? 'grey'})`,
      }}
    >
      <button className='px-3'>
        <TiDelete
          style={{ width: 30, height: 30 }}
          color={`var(--color-light-red)`}
        />
      </button>
      <span className='block w-full'>{category.name ?? ''}</span>
    </div>
  );
}
