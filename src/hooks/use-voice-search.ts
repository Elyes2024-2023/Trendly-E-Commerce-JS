'use client'

import { useState, useCallback } from 'react'

export function useVoiceSearch() {
  const [isListening, setIsListening] = useState(false)

  const startListening = useCallback(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice search is not supported in your browser.')
      return
    }

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      // TODO: Implement search with transcript
      console.log('Voice search:', transcript)
    }

    recognition.start()
  }, [])

  return {
    isListening,
    startListening,
  }
} 