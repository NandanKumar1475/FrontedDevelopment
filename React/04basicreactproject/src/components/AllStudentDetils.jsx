import { useState, useEffect } from 'react';
import '../styles/AllStudentDetails.css'
import Navbar from './Navbar';
import Footer from './Footer';
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
    <Navbar></Navbar>
        <div className="alldetails">
            <div className="left-details">
                <img src="https://wpschoolpress.com/wp-content/uploads/2024/03/Student-information-management-system.png" alt="img" />

            </div>
            <div className="right-details">
                <h2>All Student Details</h2>
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>phone</th>
                    <th>Email</th>
                    
                </tr>
            </thead>
            <tbody>
                {studentdata.map((student) => (
                    <tr key={student.id}>
                        <td>{count++}</td>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                      <td>{student.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            </div>
        </div>
        <Footer></Footer>
    </>
);

};

export default AllStudentDetails;
