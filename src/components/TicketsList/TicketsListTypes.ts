import { ITicket } from '@services/Ticket/ticketModel'

export interface ITicketsListProps {
  tickets: ITicket[]
  isLoading: boolean
}
