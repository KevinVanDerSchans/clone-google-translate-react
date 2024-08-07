import { Form } from 'react-bootstrap'
import { SectionType } from '../../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { height: '200px', border: 0 }

const getPlaceholder = ({ type, loading }: { type: SectionType; loading?: boolean }) => {
  if (type === SectionType.From) return 'Enter text...'
  if (loading === true) return 'Loading...'
  return 'Translation'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles = type === SectionType.From ? commonStyles : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      value={value}
      onChange={handleChange}
      disabled={type === SectionType.To}
      autoFocus={type === SectionType.From}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
    />
  )
}
