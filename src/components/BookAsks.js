import React from 'react';
import './Book.scss';

function BookAsks({ asks }) {
  let current = 0;
  const totalPrecalculated = Object.values(asks).slice(0, 25).reduce((prev, current) => prev + current[2], 0);
  return (
    <div className="book-asks-root">
      <div className='item-container'>
        <div className='item label'>
          <div className='col '>PRICE</div>
          <div className='col'>TOTAL</div>
          <div className='col'>AMOUNT</div>
          <div className='col count'>COUNT</div>
        </div>
        {
          Object.values(asks).slice(0, 25).map(bookBid => {
            const [ price, count, amount ] = bookBid;
            current += amount;
            return (
              <div
                className='item ask'
                key={price}
                style={{ backgroundImage: `linear-gradient(to right, #8b2a2f 0%, #8b2a2f ${(current / totalPrecalculated) * 100}%, transparent ${(current / totalPrecalculated) * 100}%, transparent 100%)` }}
              >
                <div className='col'>{price}</div>
                <div className='col'>{Math.abs(current).toFixed(2)}</div>
                <div className='col'>{Math.abs(amount).toFixed(2)}</div>
                <div className='col count'>{count}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BookAsks;