import { useStore } from '../../hooks/useStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { AUTO_LANGUAGE } from '../../constants'
import { ArrowsIcon } from '../Icons/Icons'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { SectionType } from '../../types.d'
import { TextArea } from '../TextArea/TextArea'

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    setFromText,
    setResult,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
  } = useStore()

  return (
    <Container fluid>
      <h2>Clon - Google Translate</h2>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
              placeholder='Type text...'
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button
            variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
            <TextArea
              type={SectionType.To}
              value={result}
              onChange={setResult}
              placeholder='Translation'
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
