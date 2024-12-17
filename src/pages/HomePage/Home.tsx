import { useState } from 'react'

import { useTicket } from '@services/Ticket'
import CurrencySelector from '@components/CurrencySelector'
import TicketsList from '@components/TicketsList'
import TransferFilter from '@components/TransferFilter'

import './HomePageStyles.scss'

const Home = () => {
  const [currency, setCurrency] = useState<string>('RUB')
  const [selectedTransfers, setSelectedTransfers] = useState<string[]>([])

  const { useGetTickets } = useTicket()
  const { data, isLoading } = useGetTickets({ currency, selectedTransfers })
  const dataTickets = data || []

  const handleSelectTransfers = (transfers: string[]) => {
    setSelectedTransfers(transfers)
  }

  return (
    <div className="Home">
      <div className="container">
        <div className="Home-header">logo</div>
        <div className="Home-wrapper">
          <div className="sidebar">
            <CurrencySelector
              selectedCurrency={currency}
              onSelectCurrency={setCurrency}
            />
            <TransferFilter
              selectedTransfers={selectedTransfers}
              onSelectTransfers={handleSelectTransfers}
            />
          </div>
          <div className="content">
            <TicketsList tickets={dataTickets} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
