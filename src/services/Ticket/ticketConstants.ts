import { ICurrency } from './ticketModel'

export const EXCHANGE_RATES: Record<string, ICurrency> = {
  RUB: { currentPrice: 1, symbol: '₽' },
  USD: { currentPrice: 0.013, symbol: '$' },
  EUR: { currentPrice: 0.012, symbol: '€' },
}
