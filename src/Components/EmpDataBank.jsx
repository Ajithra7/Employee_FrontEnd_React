import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const EmpDataBank = () => {

    const [EmpDataBank, setEmpDataBank] = useState([])
    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setEmpDataBank(response.data)
            })
            .catch();
    };

    useEffect(
        () => {
            getData();
        }, []
    );

    return (
        <>
            <Navbar />
            <br />
            <h2 id="headings">
                EMROLLED EMPLOYEES 
            </h2>
            <br />
            <div className='bordered'>
                <div class="table-responsive-md ">
                    <table class="table table-hover table-bordered">
                        <thead class="table-head">
                            <tr style={{size : '25px'}}>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                            </tr>
                        </thead>
                        {EmpDataBank.map((value, key) => {
                            return (

                                <tbody className='table-group-divider'>
                                    <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                    </tr>
                                </tbody>
                            )
                        })}


                    </table>
                </div>
            </div>
        </>
    )
};

export default EmpDataBank