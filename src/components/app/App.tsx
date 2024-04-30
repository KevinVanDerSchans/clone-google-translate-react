import { useStore } from '../../hooks/useStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import './App.css'
import { AUTO_LANGUAGE } from '../../constants'
import { ArrowsIcon } from '../Icons/Icons'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { SectionType } from '../../types.d'

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()

  return (
    <Container fluid>
      <h2>Clon - Google Translate</h2>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage} />
            <Form.Control as='textarea' placeholder='Type text...' autoFocus style={{ height: '150px' }} />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
            <Form.Control as='textarea' placeholder='Translation' style={{ height: '150px' }} />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
