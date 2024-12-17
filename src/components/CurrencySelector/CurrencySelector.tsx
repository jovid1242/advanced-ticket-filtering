import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import './CurrencySelectorStyles.scss'
import { ICurrencySelectorProps } from './CurrencySelectorType'

const CurrencySelector = ({
  selectedCurrency,
  onSelectCurrency,
}: ICurrencySelectorProps) => {
  const currencies = useMemo(() => ['RUB', 'USD', 'EUR'], [])
  const { t } = useTranslation()

  return (
    <div className="CurrencySelector">
      <div className="CurrencySelector-wrapper">
        <div className="CurrencySelector-wrapper__head">
          <span>{t('CURRENCY')}</span>
        </div>
        <div className="currencies-buttons">
          {currencies.map((currency) => (
            <button
              key={currency}
              className={`currencies-buttons__btn ${
                selectedCurrency === currency ? 'active' : ''
              }`}
              onClick={() => onSelectCurrency(currency)}
            >
              {currency}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CurrencySelector
