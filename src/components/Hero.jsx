//another way by which a child can pick a prop coming from the parent: destructuring

function Hero({ cats }){


    return(
        <div className="row py-5">
            {
                cats.map(function(cat, index){
                    return (
                        <div className="col-md-2" key={cat}>
                            <p>
                                {cat}
                            </p>
                        </div>
                    )
                })
            }

            
        </div>
    )
}

export default Hero