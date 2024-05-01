import { Form } from 'react-bootstrap'
import { SectionType } from '../../types.d'

interface Props {
  type: SectionType
  placeholder: string
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

export const TextArea = ({ type, placeholder, loading, value, onChange }: Props) => {
  return (
    <Form.Control
      as='textarea'
      autoFocus={type === SectionType.From}
      placeholder={placeholder}
      style={{ height: '150px' }}
    />
  )
}
