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
                    </tr>
                </thead>
            </table>
        </div>
    )
}



    

