import React from 'react';

const obj = [
  {
    color: 'yellow',
    type: 'savings',
    percent: 45,
  },
  {
    color: 'purple',
    type: 'investment',
    percent: 15,
  },
  {
    color: 'light-red',
    type: 'expense',
    percent: 40,
  },
];

function LabelComponent({ data }) {
  if (!data) return <></>;
  const { color, type, percent } = data;
  return (
    <div className='labels flex justify-between'>
      <div className='flex gap-2'>
        <div
          className={`w-2 h-w rounded py-3 ${
            color ? `bg-${color}` : 'bg-grey'
          }`}
        ></div>
        <h3 className='text-md'>{type ?? ''}</h3>
      </div>
      <h3 className='font-bold'>{percent ?? 0}%</h3>
    </div>
  );
}

const Labels = () => {
  return (
    <>
      {obj.map((item, idx) => (
        <LabelComponent key={idx} data={item} />
      ))}
    </>
  );
};

export default Labels;
