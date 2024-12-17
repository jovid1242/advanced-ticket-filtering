import tickets from '@data/tickets.json'

import { IGetTicketParams, ITicket, ITicketResponse } from './ticketModel'
import { EXCHANGE_RATES } from './ticketConstants'

const ticketData = tickets.tickets

const convertPrice = (
  price: number,
  currency: string
): { price: number; symbolPrice: string } => {
  const rate = EXCHANGE_RATES[currency]

  if (!rate) {
    console.warn(`Неизвестная валюта: ${currency}`)
    return { price, symbolPrice: '₽' }
  }

  return {
    price: Math.round(price * rate.currentPrice),
    symbolPrice: rate.symbol,
  }
}

const ticketApi = {
  async getTickets({
    currency,
    selectedTransfers,
  }: IGetTicketParams): Promise<ITicketResponse[]> {
    const isTransfersFilterEmpty = selectedTransfers.length === 0

    const filteredTickets = isTransfersFilterEmpty
      ? ticketData
      : ticketData.filter((ticket) =>
          selectedTransfers.includes(ticket.stops.toString())
        )

    const sortedTickets = this.sortTicketsByPrice(filteredTickets)

    const convertedTickets: ITicketResponse[] = sortedTickets.map((ticket) => {
      const { price, symbolPrice } = convertPrice(ticket.price, currency)

      return {
        ...ticket,
        price,
        symbolPrice,
      }
    })

    return convertedTickets
  },

  sortTicketsByPrice(tickets: ITicket[]): ITicket[] {
    return tickets.sort((a, b) => a.price - b.price)
  },
}

export default ticketApi
