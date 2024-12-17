import { useMemo } from 'react'
import { useQuery } from 'react-query'

import ticketApi from './ticketApi'
import { IGetTicketParams } from './ticketModel'

const useTicket = () =>
  useMemo(
    () => ({
      useGetTickets: (params: IGetTicketParams) =>
        useQuery(
          [params.currency, params.selectedTransfers],
          () => ticketApi.getTickets(params),
          {
            keepPreviousData: true,
            staleTime: 5,
          }
        ),
    }),
    []
  )

export default useTicket
