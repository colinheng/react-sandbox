import { useRef } from "react"

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = "Hello there"
    inputRef.current.style.backgroundColor = "red"
    paraRef.current.innerText = "Miaow miaow miaow!!"
  }

  return (
    <div>
      UseRefExample1
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} id="name" className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Submit</button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello miaow miaow kitty</p>
      </form>
    </div>
  )
}

export default UseRefExample1