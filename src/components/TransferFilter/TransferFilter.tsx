import { useTranslation } from 'react-i18next'
import './TransferFilterStyles.scss'
import { ITransferFilterProps } from './TransferFilterTypes'

const TransferFilter = ({
  selectedTransfers,
  onSelectTransfers,
}: ITransferFilterProps) => {
  const { t } = useTranslation()

  const options = [
    { label: t('All'), value: 'all' },
    { label: t('NOTRANSFERS'), value: '0' },
    { label: t('ONETRANSFER'), value: '1' },
    { label: t('TWOTRANSFERS'), value: '2' },
    { label: t('THREETRANSFERS'), value: '3' },
  ]

  const handleCheckboxChange = (value: string) => {
    if (value === 'all') {
      if (selectedTransfers.length === options.length - 1) {
        onSelectTransfers([])
      } else {
        onSelectTransfers(
          options.map((option) => option.value).filter((v) => v !== 'all')
        )
      }
    } else {
      if (selectedTransfers.includes(value)) {
        onSelectTransfers(selectedTransfers.filter((item) => item !== value))
      } else {
        onSelectTransfers([...selectedTransfers, value])
      }
    }
  }

  return (
    <div className="TransferFilter">
      <div className="TransferFilter-wrapper">
        <div className="TransferFilter-wrapper__head">
          <span>{t('NUMBEROFTRANSFERS')}</span>
        </div>
      </div>

      <div className="filter-options">
        {options.map((option) => (
          <label className="filter-options__option" key={option.value}>
            <input
              type="checkbox"
              name="checkbox-checked"
              checked={
                option.value === 'all'
                  ? selectedTransfers.length === options.length - 1
                  : selectedTransfers.includes(option.value)
              }
              onChange={() => handleCheckboxChange(option.value)}
              value={option.value}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default TransferFilter
