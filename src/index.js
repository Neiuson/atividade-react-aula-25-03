import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div style={{margin:'auto',with:768, backgroundColor :`#EEE`,padding: 12, borderRadius:8}}>
        <label htmlFor="nome" style={{display: 'block',marginBottom: 4}}>Nome</label>
        <input id= 'nome'type="text" style={{paddingTop: 12,paddingBottom: 8, borderStyle:'hidden',outline:'none',width:'100%',boxSizing}}></input>
        <button style={{marginTop : 12,paddintop: 8,paddingBottom: 8, backgroundColor:'blueviolet' }}></button>
        </div> 
    )
    
    }

ReactDOM.render(
    <App/>,
    // document.getElementById("root")
    document.querySelector("#root")
)






{/* <html>
    <head>

    </head>
    <body>
        <div id="root"></div>
    </body>
</html>

function App (){
    return <div>Oi</div>
}

document.getElementById("root") */}