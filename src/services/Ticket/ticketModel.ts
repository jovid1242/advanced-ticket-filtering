export interface IGetTicketParams {
  currency: string
  selectedTransfers: string[]
}

export interface ITicket {
  id: string
  origin: string
  origin_name: string
  destination: string
  destination_name: string
  departure_date: string
  departure_time: string
  arrival_date: string
  arrival_time: string
  carrier: string
  stops: number
  price: number
  symbolPrice?: string
}

export interface ICurrency {
  currentPrice: number
  symbol: string
}

export interface ITicketResponse extends ITicket {
  price: number
  symbolPrice: string
}
