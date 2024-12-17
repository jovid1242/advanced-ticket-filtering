import './TransferFilterStyles.scss'
import { ITransferFilterProps } from './TransferFilterTypes'

const TransferFilter = ({
  selectedTransfers,
  onSelectTransfers,
}: ITransferFilterProps) => {
  const options = [
    { label: 'Все', value: 'all' },
    { label: 'Без пересадок', value: '0' },
    { label: '1 пересадка', value: '1' },
    { label: '2 пересадки', value: '2' },
    { label: '3 пересадки', value: '3' },
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
          <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
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
