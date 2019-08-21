import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { bitcoin } from 'react-icons-kit/fa/bitcoin';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';
import { caretDown } from 'react-icons-kit/fa/caretDown';
import { caretUp } from 'react-icons-kit/fa/caretUp';
import './Book.scss';

function BookAsks({ asks }) {
  let total = 0;
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
            total += amount;
            return (
              <div
                className='item ask'
                key={price}
                style={{ backgroundImage: `linear-gradient(to right, #8b2a2f 0%, #8b2a2f ${(total / totalPrecalculated) * 100}%, transparent ${(total / totalPrecalculated) * 100}%, transparent 100%)` }}
              >
                <div className='col'>{price}</div>
                <div className='col'>{Math.abs(total).toFixed(2)}</div>
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