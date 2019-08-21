import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { bitcoin } from 'react-icons-kit/fa/bitcoin';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';
import { caretDown } from 'react-icons-kit/fa/caretDown';
import { caretUp } from 'react-icons-kit/fa/caretUp';
import './Ticker.scss';

function withCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function asPercent(x) {
  return (x * 100).toFixed(2) + '%';
}

function Ticker({ bid, bidSize, ask, askSize, dailyChange, dailyChangePerc, lastPrice, volume, high, low, currency, pair }) {
  return (
    <div className="ticker-root">

      <div className='column no-padding-right'>
        <Icon className='icon' size={58} icon={bitcoin} />
      </div>

      <div className='column'>
        <p className='mediumTxt'>{pair} <Icon className='icon' size={12} icon={infoCircle} /></p>
        <p className='smallTxt'>VOL <span>{ withCommas(Math.round(volume * lastPrice)) }</span> {currency}</p>
        <p className='smallTxt'>LOW {withCommas(low)} </p>
      </div>

      <div className='column'>
        <p className='mediumTxt'>{withCommas(lastPrice.toFixed(2))}</p>
        <p className={`smallTxt ${ dailyChange > 0 ? 'positive' : 'negative' }`}>
          { dailyChange.toFixed(2) }
          { dailyChange > 0 ? <Icon className='icon' size={18} icon={caretUp} /> : <Icon className='icon' size={18} icon={caretDown} /> }
          ({asPercent(dailyChangePerc)})
        </p>
        <p className='smallTxt'>HIGH {withCommas(high)} </p>
      </div>

    </div>
  )
}

export default Ticker;