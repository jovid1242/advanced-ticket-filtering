import dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

import AirPlaneIcon from '@assets/airplane.svg'
import AirLineImg from '@assets/atk.webp'
import { ITicketCardProps } from './TicketCardTypes'

import './TicketCardStyles.scss'

const TicketCard = ({ ticket }: ITicketCardProps) => {
  const formatDate = (dateStr: string): string => {
    return dayjs(dateStr, 'DD.MM.YY').format('D MMMM YYYY, ddd')
  }

  return (
    <div className="TicketCard">
      <div className="TicketCard-wrapper">
        <div className="TicketCard-header">
          <img
            src={AirLineImg}
            alt={`${ticket.origin} Logo airline`}
            className="TicketCard-header__img"
          />
          <button className="buy-button">
            Купить <br /> за {ticket.price}
            {ticket.symbolPrice}
          </button>
        </div>
        <div className="TicketCard-details">
          <div className="departureTime">
            <span className="date">{ticket.departure_time}</span>
            <span className="from">
              {ticket.origin}, {ticket.origin_name}
            </span>
            <span className="from-date">
              {formatDate(ticket.departure_date)}
            </span>
          </div>
          <div className="transfers">
            <div className="transfers__title">
              <span>{ticket.stops} ПЕРЕСАДКА</span>
            </div>
            <div className="transfers__icon">
              <div className="transfers__icon-line" />
              <img src={AirPlaneIcon} alt="AirPlane Icon" />
            </div>
          </div>
          <div className="arrivalTime">
            <span className="date">{ticket.arrival_time}</span>
            <span className="to">
              {ticket.destination_name} , {ticket.destination}
            </span>
            <span className="to-date">{formatDate(ticket.arrival_date)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
