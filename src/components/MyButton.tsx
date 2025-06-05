import React, { useState } from 'react'
import { useCounter } from './provider/Counter'
interface MyButtonProps {
  text?: string | number,
  onclick?: () => void
}

interface Book {
  name: string | boolean,
  price: number
}

// const MyButton = (props:{text:string}) => {} is ok
const MyButton: React.FC<MyButtonProps> = (props) => {

  
  const context = useCounter()
  
  let [value, setValue] = useState<number>(1)
  let [value1, setValue1] = useState<number>(1)

  let [obj, setObj] = useState<Book>({
    name: "raj", price: 87
  })

  // if text prop is missing use default value!
  let { text = "909", onclick = () => { } } = props

  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e)
    setValue1(Number(e.target.value))
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e)

  }

  return (
    <>
      <h3>{value}</h3>
      <button onClick={() => context?.setCount(context.value + 1)}>context {context?.value}</button>

      <h3>{obj?.name + "  " + obj.price}</h3>

      <button onClick={onclick}>{text}</button>

      <button onClick={() => setValue(value + 1)} >{text}</button>

      <button onClick={() => setObj({ name: "raj", price: 9 })} >book</button>

      <p>Forms :</p>

      <form onSubmit={submit}>
        {/* input is html form element */}
        <input type='text' value={value1} placeholder='type.......' onChange={handle} />
        <button type='submit'>Sub</button>

      </form>

    </>

  )
}

export default MyButton