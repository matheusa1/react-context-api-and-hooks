import React from 'react'

import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
import { Loading } from '../../components/Loading'
import { useCounterContext } from '../../context/CounterContext'
import './styles.css'

export const Home = () => {
  const { state, actions } = useCounterContext()

  const onHandleError = () => {
    actions
      .asyncError()
      .then((e) => console.log(e))
      .catch((e) => console.log(e.name, ':', e.message))
  }

  return (
    <div className={'container'}>
      <Heading />

      <div className="buttonsWrapper">
        <Button onHandleClick={actions.increment}>{'Increment'}</Button>
        <Button onHandleClick={actions.decrement}>{'Decrement'}</Button>
        <Button onHandleClick={actions.reset}>{'Reset'}</Button>
        <Button onHandleClick={() => actions.setCount({ counter: 10 })}>
          {'Set 10'}
        </Button>
        <Button onHandleClick={() => actions.setCount({ counter: 100 })}>
          {'Set 100'}
        </Button>
        <Button disabled={state.loading} onHandleClick={actions.asyncIncrement}>
          {state.loading ? <Loading /> : 'Async increment'}
        </Button>
        <Button disabled={state.loading} onHandleClick={onHandleError}>
          {state.loading ? <Loading /> : 'Async error'}
        </Button>
      </div>
    </div>
  )
}
