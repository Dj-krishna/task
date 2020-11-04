import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tabletop from 'tabletop';
import './Table.css';

 function Data(){

    const [data, setData] = useState({});

    useEffect(() => {
        Tabletop.init({
            key: "1G52fuVWLqgGSE04b0nXgZal6s3PAw_g89kOWoVjuKBs",
            simpleSheet: true,
        }).then(function(data){
            setData(data);
        });
    }, []);


    const TableHeader = () => {
        return (
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Specialization</th>
        </tr>
        )
    }

    const employData = Array.from(data);


    return(
        <div>
            <table>
                    <TableHeader />
                        {employData.map((ed) =>(
                        <tr>
                        <td>{ed.FirstName}</td>
                        <td>{ed.LastName} </td>
                        <td>{ed.Role} </td>
                        <td>{ed.Specialization}</td>
                        </tr> ))}
            </table>
            
            <Link className="button-inv" to="/">
                <button>Logout</button>
            </Link>
           
        </div>
    )
}

export default Data