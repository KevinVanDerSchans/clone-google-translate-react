import { useStore } from '../../hooks/useStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from '../../constants'
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from '../Icons/Icons'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { SectionType } from '../../types.d'
import { TextArea } from '../TextArea/TextArea'
import { useEffect } from 'react'
import { translate } from '../../services/translate'
import { useDebounce } from '../../hooks/useDebounce'

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    setFromText,
    setResult,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
  } = useStore()

  const debouncedFromText = useDebounce(fromText, 300)

  useEffect(() => {
    if (debouncedFromText === '') return

    translate({ fromLanguage, toLanguage, text: fromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => setResult('Error 429, Too many request'))
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    utterance.rate = 1
    speechSynthesis.speak(utterance)
  }

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
              loading={loading}
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
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />

            <div style={{ position: 'relative' }}>
              <TextArea
                type={SectionType.To}
                value={result}
                onChange={setResult}
                loading={loading}
              />

              <div style={{ display: 'flex', position: 'absolute', left: 0, bottom: 0 }}>
                <Button
                  variant='link'
                  onClick={handleClipboard}
                >
                  <ClipboardIcon />
                </Button>
                <Button
                  variant='link'
                  onClick={handleSpeak}
                >
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
