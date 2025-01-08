



import { useState } from 'react';
import Calendar from 'react-calendar';


export const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='calender'>
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
    </div>
  )
}
