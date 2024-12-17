import { ITicket } from '@services/Ticket/ticketModel'
import Loading from '@components/Loading'
import Empty from '@components/Empty'

import { ITicketsListProps } from './TicketsListTypes'
import TicketCard from '../TicketCard'

import './TicketsListStyles.scss'

const TicketsList = ({ tickets = [], isLoading }: ITicketsListProps) => {
  if (isLoading) {
    return <Loading />
  }

  if (tickets.length === 0) {
    return <Empty text="Нет билетов, соответствующих фильтру" />
  }

  return (
    <div className="TicketsList">
      <div className="TicketsList-wrapper">
        {tickets.map((ticket: ITicket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  )
}

export default TicketsList
