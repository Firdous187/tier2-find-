import React from 'react'
import { useState } from 'react';

function EmployeesForm() {
    let [employees, setEmployees] = useState([]);

    let getEmployeesFromServer = async () => {
        let reqOptions = {
            method: "GET"
        }
        let JSONData = await fetch("http://localhost:4567/getEmployees", reqOptions);

        let JSOData = await JSONData.json();
        console.log(JSOData);
        setEmployees(JSOData.data);
    };

    return (
        <div>
            <form>
                <div>
                    <button type="button" onClick={() => {
                        getEmployeesFromServer();
                    }}>Get Employee</button>
                </div>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>email</th>
                       <th>country</th>
                        <th>profilePic</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((ele, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{ele.id}</td>
                                <td>{ele.first_name}</td>
                                <td>{ele.last_name}</td>
                                <td>{ele.age}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.email}</td>
                                <td>{ele.Country}</td>
                                <td>
                                    <img src={ele.profilePic} alt=''></img>
                                </td>
                            </tr>
                        );
                    })}
                    {/* {employees.map((ele,i)=>{
return
<tr>
    <td>{i+1}</td>
    <td>{ele.first_name}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
                    })} */}
                </tbody>
                <tfoot>

                </tfoot>
            </table>


        </div>

    )
}

export default EmployeesForm