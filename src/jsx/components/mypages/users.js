import React , { useState } from "react";
import axios from 'axios';
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Dropdown,
    ProgressBar,
    Button, Modal
 } from "react-bootstrap";
 import swal from "sweetalert";
import swalMessage from "@sweetalert/with-react";
 /// imge
 import avatar1 from "../../../images/avatar/1.jpg";
 import avatar2 from "../../../images/avatar/2.jpg";
 import avatar3 from "../../../images/avatar/3.jpg";
 import { Link } from "react-router-dom";
const Users= ()=>{
   const [largeModal, setLargeModal] = useState(false);
return(
    <div><Col lg={12}>
    <Card>
       <Card.Header>
          <Card.Title>Users List</Card.Title>
          <Button variant="info btn-rounded"  onClick={() => setLargeModal(true)}>
                           <span className="btn-icon-left text-info">
                              <i className="fa fa-plus color-info" />
                           </span>
                           Add User
                        </Button>
                        <Modal
                           className="fade bd-example-modal-lg"
                           show={largeModal}
                           size="lg"
                        >
                           <Modal.Header>
                              <Modal.Title>Add user</Modal.Title>
                              <Button
                                 variant=""
                                 className="close"
                                 onClick={() => setLargeModal(false)}
                              >
                                 <span>&times;</span>
                              </Button>
                           </Modal.Header>
                           <Modal.Body><div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Form Validation</h4>
                  </div>
                  <div className="card-body">
                     <div className="form-validation">
                        <form
                           className="form-valide"
                           action="#"
                           method="post"
                           onSubmit={(e) => e.preventDefault()}
                        >
                           <div className="row">
                              <div className="col-xl-6">
                                 <div className="form-group row">
                                    <label
                                       className=""
                                       htmlFor="val-username"
                                    >
                                       Team name
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-username"
                                          name="val-username"
                                          placeholder="Enter a Team Name.."
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className=""
                                       htmlFor="val-email"
                                    >
                                       Description
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-email"
                                          name="val-email"
                                          placeholder="Your description.."
                                       />
                                    </div>
                                 </div>
                                
                              
                                
                                 
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-lg-8 ml-auto">
                                       <button onClick={function(){
                                         let  teamName = document.getElementById("val-username").value;
                                         let  description = document.getElementById("val-email").value;
                                          axios.post(`https://prod-146.westeurope.logic.azure.com:443/workflows/e0037bc440b24abc80b9c4658482557a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Yya5E9NEY83Z1M4d_Km7hvCsW_50dOPmUQax_moHDl4`, {
    "teamName":teamName,
    "Description":description
})
      .then(res => {
        
        alert("Team id" + res.data.newTeamId);
      })
  }}
                                          type="submit"
                                          className="btn btn-primary"
                                       >
                                          Submit
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            </div>
            </Modal.Body>
                           <Modal.Footer>
                              <Button
                                 variant="danger light"
                                 onClick={() => setLargeModal(false)}
                              >
                                 Close
                              </Button>
                        
                           </Modal.Footer>
                        </Modal>

       </Card.Header>
       <Card.Body>
          <Table responsive>
             <thead>
                <tr>
                   <th className="width50">
                      <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                         <input
                            type="checkbox"
                            className="custom-control-input"
                            id="checkAll"
                            required=""
                         />
                         <label
                            className="custom-control-label"
                            htmlFor="checkAll"
                         ></label>
                      </div>
                   </th>
                   <th>
                      <strong>ROLL NO.</strong>
                   </th>
                   <th>
                      <strong>NAME</strong>
                   </th>
                   <th>
                      <strong>Email</strong>
                   </th>
                   <th>
                      <strong>Date</strong>
                   </th>
                   <th>
                      <strong>Status</strong>
                   </th>
                </tr>
             </thead>
             <tbody>
                <tr>
                   <td>
                      <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                         <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheckBox2"
                            required=""
                         />
                         <label
                            className="custom-control-label"
                            htmlFor="customCheckBox2"
                         ></label>
                      </div>
                   </td>
                   <td>
                      <strong>542</strong>
                   </td>
                   <td>
                      <div className="d-flex align-items-center">
                         <img
                            src={avatar1}
                            className="rounded-lg mr-2"
                            width="24"
                            alt=""
                         />{" "}
                         <span className="w-space-no">
                            Dr. Jackson
                         </span>
                      </div>
                   </td>
                   <td>example@example.com </td>
                   <td>01 August 2020</td>
                   <td>
                      <div className="d-flex align-items-center">
                         <i className="fa fa-circle text-success mr-1"></i>{" "}
                         Successful
                      </div>
                   </td>
                   <td>
                      <div className="d-flex">
                         <Link
                            href="#"
                            className="btn btn-primary shadow btn-xs sharp mr-1"
                            
                         >
                            <i className="fa fa-pencil"></i>
                         </Link>
                         <Link
                            href="#"
                            className="btn btn-danger shadow btn-xs sharp"
                            onClick={() =>
                              swal({
                                 title: "Are you sure?",
                                 text:
                                    "Once deleted, you will not be able to recover this user",
                                 icon: "warning",
                                 buttons: true,
                                 dangerMode: true,
                              }).then((willDelete) => {
                                 if (willDelete) {
                                    swal(
                                       "Poof! Your user has been deleted!",
                                       {
                                          icon: "success",
                                       }
                                    );
                                 } else {
                                    swal("User is safe!");
                                 }
                              })
                           }
                         >
                            <i className="fa fa-trash"></i>
                            
                         </Link>
                      </div>
                   </td>
                </tr>
                <tr>
                   <td>
                      <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                         <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheckBox3"
                            required=""
                         />
                         <label
                            className="custom-control-label"
                            htmlFor="customCheckBox3"
                         ></label>
                      </div>
                   </td>
                   <td>
                      <strong>542</strong>
                   </td>
                   <td>
                      <div className="d-flex align-items-center">
                         <img
                            src={avatar2}
                            className="rounded-lg mr-2"
                            width="24"
                            alt=""
                         />{" "}
                         <span className="w-space-no">
                            Dr. Jackson
                         </span>
                      </div>
                   </td>
                   <td>example@example.com </td>
                   <td>01 August 2020</td>
                   <td>
                      <div className="d-flex align-items-center">
                         <i className="fa fa-circle text-danger mr-1"></i>{" "}
                         Canceled
                      </div>
                   </td>
                   <td>
                      <div className="d-flex">
                         <Link
                            href="#"
                            className="btn btn-primary shadow btn-xs sharp mr-1"
                         >
                            <i className="fa fa-pencil"></i>
                         </Link>
                         <Link
                            href="#"
                            className="btn btn-danger shadow btn-xs sharp"
                         >
                            <i className="fa fa-trash"></i>
                         </Link>
                      </div>
                   </td>
                </tr>
                <tr>
                   <td>
                      <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                         <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheckBox4"
                            required=""
                         />
                         <label
                            className="custom-control-label"
                            htmlFor="customCheckBox4"
                         ></label>
                      </div>
                   </td>
                   <td>
                      <strong>542</strong>
                   </td>
                   <td>
                      <div className="d-flex align-items-center">
                         <img
                            src={avatar3}
                            className="rounded-lg mr-2"
                            width="24"
                            alt=""
                         />{" "}
                         <span className="w-space-no">
                            Dr. Jackson
                         </span>
                      </div>
                   </td>
                   <td>example@example.com </td>
                   <td>01 August 2020</td>
                   <td>
                      <div className="d-flex align-items-center">
                         <i className="fa fa-circle text-warning mr-1"></i>{" "}
                         Pending
                      </div>
                   </td>
                   <td>
                      <div className="d-flex">
                         <Link
                            href="#"
                            className="btn btn-primary shadow btn-xs sharp mr-1"
                         >
                            <i className="fa fa-pencil"></i>
                         </Link>
                         <Link
                            href="#"
                            className="btn btn-danger shadow btn-xs sharp"
                         >
                            <i className="fa fa-trash"></i>
                         </Link>
                      </div>
                   </td>
                </tr>
             </tbody>
          </Table>
       </Card.Body>
    </Card>
 </Col>
 </div>

)




}
export default Users;