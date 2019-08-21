import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { bitcoin } from 'react-icons-kit/fa/bitcoin';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';
import { caretDown } from 'react-icons-kit/fa/caretDown';
import { caretUp } from 'react-icons-kit/fa/caretUp';
import './Book.scss';

function BookBids({ bids }) {
  let total = 0;
  const totalPrecalculated = Object.values(bids).slice(0, 25).reduce((prev, current) => prev + current[2], 0);

  return (
    <div className="book-bids-root">
      <div className='item-container'>
        <div className='item label'>
          <div className='col count'>COUNT</div>
          <div className='col'>AMOUNT</div>
          <div className='col'>TOTAL</div>
          <div className='col'>PRICE</div>
        </div>
        {
          Object.values(bids).reverse().slice(0, 25).map(bookBid => {
            const [ price, count, amount ] = bookBid;
            total += amount;
            return (
              <div className='item bid'
                   key={price}
                   style={{ backgroundImage: `linear-gradient(to left, #526c2e 0%, #526c2e ${(total / totalPrecalculated) * 100}%, transparent ${(total / totalPrecalculated) * 100}%, transparent 100%)` }}
              >
                <div className='col count'>{count}</div>
                <div className='col'>{amount.toFixed(2)}</div>
                <div className='col'>{total.toFixed(2)}</div>
                <div className='col'>{price}</div>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}

export default BookBids;