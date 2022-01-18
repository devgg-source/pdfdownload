import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  listPetitions,
  deletePetition,
  deleteAllPetitions,
} from "../actions/petitionActions";
import Loader from "./Loader";

const PetitionList = () => {
  const dispatch = useDispatch();

  const petitionList = useSelector((state) => state.petitionList);

  const { loading, petitions, error } = petitionList;

  const petitionDelete = useSelector((state) => state.petitionDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = petitionDelete;

  const petitionDeleteAll = useSelector((state) => state.petitionDeleteAll);
  const { success: deleteAll } = petitionDeleteAll;

  useEffect(() => {
    dispatch(listPetitions());
  }, [successDelete, deleteAll]);

  const deleteHandler = (id) => {
    if (window.confirm("Do you want to delete this record?")) {
      dispatch(deletePetition(id));
    }
  };

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 7;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Petition Report";
    const headers = [
      [
        "SNO",
        "NAME",

        "COMMUNITY",
        "AADHAR NUMBER",
        "SMARTCARD NUMBER",
        "FIRKKA",
        "VILLAGE NAME",
      ],
    ];

    const data = petitions.map((petition) => [
      petition.sno,
      petition.petitionerName,
      petition.community,
      petition.aadharNumber,
      petition.smartCardNumber,
      petition.firkka,
      petition.villageName,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");

    dispatch(deleteAllPetitions());
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : petitions.length === 0 ? (
        <h2 className="heading">No petitions found</h2>
      ) : (
        <>
          <button className="btn btn-primary pdf" onClick={exportPDF}>
            {" "}
            <i className="fa fa-file-pdf-o pd"></i> Download
          </button>
          <table className="table table-striped table1">
            <thead>
              <tr>
                <th>SNO</th>
                <th>Petitioner Name</th>
                <th>Community</th>
                <th>Aadhar Number</th>
                <th>Smart Card</th>
                <th>Firkka</th>
                <th>Village</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {petitions.map((petition) => (
                <tr key={petition._id}>
                  <td>{petition.sno}</td>
                  <td>{petition.petitionerName}</td>
                  <td>{petition.community}</td>
                  <td>{petition.aadharNumber}</td>
                  <td>{petition.smartCardNumber}</td>
                  <td>{petition.firkka}</td>
                  <td>{petition.villageName}</td>
                  <td>
                    <Link to={`${petition._id}/edit`}>
                      <i className="fas fa-edit"></i>
                    </Link>
                  </td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => deleteHandler(petition._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default PetitionList;
