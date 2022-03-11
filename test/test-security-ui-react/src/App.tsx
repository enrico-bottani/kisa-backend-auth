import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    function getResource() {
        let requestStudent = "http://localhost:8080/api/students/1";

        return fetch(requestStudent, {
            mode: "cors", method: "GET", headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, credentials: 'include'
        }).then(
            response => {
                return response.json();
            }
        )
    }

    function authenticate() {
        let request = "http://localhost:8080/login";

        fetch(request, {
            mode: "cors", method: "POST", headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, credentials: 'include', body: "username=user&password=eb58d120-ea0c-47e0-89c1-0ddfcdad3ed8"
        }).then(
            response => {
                return response.json();
            }
        ).then(
            body => {
                console.log("authentication ok! body: ",body)
            }
        ).catch(
            e => {
                console.error("Error on request: " + request)
                console.log(e)
            }
        )
    }

    useEffect(() => {
        //authenticate();
        getResource().then(
            body => {
                console.log(body)
            }
        ).catch(
            e => {
                console.log(e);
                authenticate()
            });
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
