import React from 'react'

export default function IndexPage (){
   

    return (
        <div>
            <h1>Signup Pages</h1>
            
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">
                    <button onClick={ function() {window.location.href= "/#/signup1"}} type="button" class="btn btn-primary">Signup 1</button>
                    </th>
                    <th scope="col">
                    <button onClick={ function() {window.location.href= "/#/signup2"}} type="button" class="btn btn-primary">Signup 2</button>
                    </th>
                    <th scope="col">
                    <button onClick={ function() {window.location.href= "/#/signup3"}} type="button" class="btn btn-primary">Signup 3</button>
                    </th>
                    <th scope="col">
                    <button onClick={ function() {window.location.href= "/#/signup4"}} type="button" class="btn btn-primary">Signup 4</button>
                    </th>
                    <th scope="col">
                    <button onClick={ function() {window.location.href= "/#/signup5"}} type="button" class="btn btn-primary">Signup 5</button>
                    </th>
                    <th scope="col">
                    <button onClick={ function() {window.location.href= "/#/signup6"}} type="button" class="btn btn-primary">Signup 6</button>
                    </th>
                    <th scope="col">
                    <button onClick={ function() {window.location.href= "/#/signup7"}} type="button" class="btn btn-primary">Signup 7</button>
                    </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}



    

