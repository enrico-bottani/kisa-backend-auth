import React, {useEffect} from 'react';
import './App.css';
import Cookies from 'js-cookie';


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
        let password = "09f11391-a04a-4091-acff-309471dca4f6"
        let csrfToken=  Cookies.get('XSRF-TOKEN');
        if (csrfToken==undefined)csrfToken="";
        fetch(request, {
            mode: "cors", method: "POST", headers: {
                'X-XSRF-TOKEN': csrfToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            }, credentials: 'include', body: "username=user&password="+password
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
