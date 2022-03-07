import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    useEffect(() => {
        let request = "http://localhost:8080/api/students/1";
       // let request = "http://localhost:8080/login";
        fetch(request,{mode:"cors",method:"GET",credentials: 'include'}).then(
            response=>{
                return response.json();
            }
        ).then(
            body=>{
                console.log(body)
            }
        ).catch(
            e=>{
                console.error("Error on request: "+request)
            }
        )
    }, [])

    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            <main>

            </main>
        </div>
    );
}

export default App;
