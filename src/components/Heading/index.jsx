import React from 'react'

import { useCounterContext } from '../../context/CounterContext'

export const Heading = () => {
  const { state } = useCounterContext()

  return <h1 style={{ fontFamily: 'Poppins' }}>{state.counter}</h1>
}
