import { useState, useEffect } from 'react';
import '../styles/AllStudentDetails.css'
const AllStudentDetails = () => {
    var count = 1;
    const [studentdata, setStudentdata] = useState([]);

    useEffect(() => {
        async function fetchStudentData() {
            const response = await fetch("http://localhost:3030/Student");
            const studentjsondata = await response.json();
            setStudentdata(studentjsondata);
        }

        fetchStudentData(); 
    }, []); 

 return (
    <>
        <h2>All Student Details</h2>
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    {/* Add more headers as needed */}
                </tr>
            </thead>
            <tbody>
                {studentdata.map((student) => (
                    <tr key={student.id}>
                        <td>{count++}</td>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        {/* Add more data columns as needed */}
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);

};

export default AllStudentDetails;
