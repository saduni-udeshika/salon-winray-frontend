import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import "./AllEmployee.css";


export default function AllEmployeeSalary() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const loadPosts =async () =>{
            setLoading(true);
            const response =await axios.get("http://localhost:8070/employeeSalary/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);

    const [employeeSalarys, setEmployeeSalarys] = useState([]);

    useEffect(() => {
       function getEmployeeSalarys() {
           axios.get("http://localhost:8070/employeeSalary/").then((res) =>{
               setEmployeeSalarys(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getEmployeeSalarys();
    }, [employeeSalarys]);


   function deleteEmployeeSalary(_id){

        axios.delete("http://localhost:8070/employeeSalary/delete/"+_id).then((res)=>{

            console.log(res.data);

            alert("Employee Salary Informatin is deleted");



        }).catch((err)=>{

            alert(err)

        });

        setEmployeeSalarys(employeeSalarys.filter((employeeSalarys) => employeeSalarys._id !== _id))



    }

    function createPdf(pdfBody){

        var doc = new jsPDF('portrait','px','a3');
        var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
        doc.autoTable({
            didDrawPage: function (data) {

                // Header
                doc.setFontSize(14);
                var fileTitle = "Employee Salary Report";
                var img = 'data:image/jpeg;base64,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'; 
                doc.text(fileTitle, 30, 60);
                doc.addImage(img, 'JPEG', 550, 10, 40, 40);

                // Footer
                var pageSize = doc.internal.pageSize;
                //jsPDF 1.4+ uses getHeight, <1.4 uses .height
                var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                // jsPDF 1.4+ uses getWidth, <1.4 uses .width
                var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

                doc.autoTable({
                    html: '#my-table',
                    startY: pageHeight - 800,
                    theme: 'grid'
                });

                var str = "Page " + doc.internal.getNumberOfPages()
                // Total page number plugin only available in jspdf v1.0+
                if (typeof doc.putTotalPages === 'function') {
                    str = str + " of " + totalPagesExp;
                }
                doc.setFontSize(10);
                doc.text(str, data.settings.margin.left, pageHeight - 10);
            },
            margin: {
                bottom: 60, //this decides how big your footer area will be
                top: 40 //this decides how big your header area will be.
            }
        });
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === 'function') {
            doc.putTotalPages(totalPagesExp);
        }

        doc.save('salary.pdf'); //this downloads a copy of the pdf in your local instance.
    };



    return (
              <><div className="allemployee">
            <input className="searche"
            style={{ width:"15%" ,height:"25px"}}
            type="text"
            placeholder="search..."
            onChange={(e) => setSearchName(e.target.value)}/>
            </div> 

    <div className="container">
        <h1>EMPLOYEE SALARY DASHBOARD</h1>
        <table id="my-table" class="mye-table">
            <thead>
                <tr  className="mye-tr" >
                <th className="mye-th"scope="col">Employeee ID</th>
                <th className="mye-th" scope="col">Employee Name</th>
                <th className="mye-th" scope="col">Month</th>
                <th className="mye-th" scope="col">Basic Salary</th>
                <th className="mye-th" scope="col">NOPAY</th>
                <th className="mye-th" scope="col">Hours</th>
                <th className="mye-th" scope="col">Advance</th>
                <th className="mye-th"scope="col">Total salary</th>
                <th className="mye-th"scope="col"></th>
                </tr>
            </thead>
            {loading ? (
                    <button class="btn-btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aris-hidden="true"></span>
                        Loading </button>
                ) : (
                    posts
                        .filter((value) => {
                            if (searchName === "") {
                                return value;
                            } else if (
                                value.month.includes(searchName.toUpperCase())
                            ){
                                return value;
                            }



                        }).map((employeeSalarys,index)=> 

                    <tr className="mye-tr" key={index}>
                    <th className="mye-td"  scope="row">EMP{index+1}</th>
                    <td className="mye-td" >{employeeSalarys.empName}</td>
                    <td className="mye-td" >{employeeSalarys.month}</td>
                    <td className="mye-td">{employeeSalarys.salary}</td>
                    <td className="mye-td" >{employeeSalarys.nopay}</td>
                    <td className="mye-td">{employeeSalarys.hours}</td>
                    <td className="mye-td" >{employeeSalarys.advance}</td>
                    <td className="mye-td" >{employeeSalarys.amount}</td>
                    
                    <br></br>
                    <div class="btn">
                    <Link to={`/EditSalary/${employeeSalarys._id}`} class="btn btn-success btn-sm">

                     Update</Link>
                    &nbsp;
                    
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteEmployeeSalary(employeeSalarys._id)}>Delete</button>
                    </div>
                
                </tr> 
               
            ))}

     
        </table>
        <br>
        </br>
       <Link to={"/EmployeeSalaryCalculator"} className="btn btn-warning btn-sm">SALARY CALCULATOR</Link>
       &nbsp;
       <Link to={"/AddCalSalary"} className="btn btn-warning btn-sm">ADD NEW RECORD</Link>
       <button type="button" class="btn btn-danger btn-sm" onClick={() => createPdf()} >Download PDF</button>
    </div>
    </>
    )
}