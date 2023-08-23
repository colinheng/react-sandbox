import UseRefExample1 from "./components/UseRefExample1"
import UseRefExample2 from "./components/UseRefExample2"
import UseRefExample3 from "./components/UseRefExample3"
import UseMemoExample from "./components/UseMemoExample"
import UseCallbackExample from "./components/UseCallbackExample"
import CustomHookExample1 from "./components/CustomHookExample1"
import CustomHookExample2 from "./components/CustomHookExample2"

function App() {
  return (
    <div className="container mt-5">
      <p>7.<CustomHookExample2 /></p>
      <p>6.<CustomHookExample1 /></p>
      <p>5.<UseCallbackExample /></p>
      <p>4.<UseMemoExample /></p>
      <p>3.<UseRefExample3 /></p>
      <p>2.<UseRefExample2 /></p>
      <p>1.<UseRefExample1 /></p>

    </div>
  )
}

export default App