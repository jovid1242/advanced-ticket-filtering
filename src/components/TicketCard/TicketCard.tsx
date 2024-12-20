import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'

import AirPlaneIcon from '@assets/airplane.svg'
import AirLineImg from '@assets/atk.webp'
import { ITicketCardProps } from './TicketCardTypes'
import './TicketCardStyles.scss'

const formatDate = (dateStr: string): string => {
  return dayjs(dateStr, 'DD.MM.YY').format('D MMMM YYYY, ddd')
}

const TicketCard = ({ ticket }: ITicketCardProps) => {
  const {
    departure_time,
    origin,
    origin_name,
    departure_date,
    stops,
    arrival_time,
    destination_name,
    destination,
    price,
    symbolPrice,
  } = ticket

  const { t, i18n } = useTranslation()

  useEffect(() => {
    dayjs.locale(i18n.language)
  }, [i18n.language])

  return (
    <div className="TicketCard">
      <div className="TicketCard-wrapper">
        <div className="TicketCard-header">
          <img
            src={AirLineImg}
            alt={`${origin} Logo airline`}
            className="TicketCard-header__img"
          />
          <button className="buy-button">
            {t('BUY')}
            <span>
              {t('FOR')} {price}
              {symbolPrice}
            </span>
          </button>
        </div>
        <div className="TicketCard-details">
          <div className="departureTime">
            <span className="date">{departure_time}</span>
            <span className="from">
              {origin}, {origin_name}
            </span>
            <span className="from-date">{formatDate(departure_date)}</span>
          </div>
          <div className="transfers">
            <div className="transfers__title">
              <span>
                {stops} {t('TRANSFER')}
              </span>
            </div>
            <div className="transfers__icon">
              <div className="transfers__icon-line" />
              <img src={AirPlaneIcon} alt="AirPlane Icon" />
            </div>
          </div>
          <div className="arrivalTime">
            <span className="date">{arrival_time}</span>
            <span className="to">
              {destination_name}, {destination}
            </span>
            <span className="to-date">{formatDate(ticket.arrival_date)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
