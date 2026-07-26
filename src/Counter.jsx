import Form from "./counter_components/Form"
import Header from "./counter_components/Header"
import { useState } from "react" //we inmport useState when we want to manage any state


const Counter = () => {
    // assume we sent a equest to an API and it fetches the balance from database and return it to us
    // const balance = 10000

    const[balance, setBalance] = useState(0) // assume th zero is coming from a database

    return (
        <div className="container">

            {/* conditional rendering using ternary operator */}

            {
                balance > 5000 ?
                <p className="alert alert-success">Odogwu, You are doing well</p>
                :
                <p className="alert alert-warning">Oga work harder, You are going worker</p>


            }
            <Header balance = {balance} />
            <Form balance = {balance}
            setBalance={setBalance} />
        </div>
    )

}

export default Counter