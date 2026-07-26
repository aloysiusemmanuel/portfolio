import { useState } from "react";

const Form = ({balance, setBalance}) => {


    const [amount, setAmount] = useState("")
    
    
    function handle_withdraw(){

        if(amount > balance){
            alert('Oga insuffience balance')
            setAmount("");
            return;
        }
        setBalance(balance - amount) //calling a function that updates balance
        setAmount("");
    }
        

    return (

        <div className="row py-5">
            <div className="col-md-2 offset-md-3 py-2">
                <button className="btn btn-warning" onClick={handle_withdraw}>Withdraw</button>
            </div>

            <div className="col-md-5 py-1">
                <input type="number" className="form-control py-3" value={amount} onChange={
                    function(e){
                        setAmount(e.target.value)
                    }
                } />
            </div>

            <div className="col-md-2 py-2">
                <button className="btn btn-primary"
                onClick={
                function(){
                    setBalance(balance + Number(amount))
                    setAmount(""); //change the amount state to empty
                }
            }
                >Deposit</button>
            </div>
        </div>
    )
}

export default Form