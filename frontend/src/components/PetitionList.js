import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPetitions } from "../actions/petitionActions";

const PetitionList = () => {
  const dispatch = useDispatch();

  const petitionList = useSelector((state) => state.petitionList);

  const { loading, petitions, error } = petitionList;

  useEffect(() => {
    dispatch(listPetitions());
  }, []);

  return (
    <>
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
                <i className="fas fa-edit"></i>
              </td>
              <td>
                <i className="fa fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PetitionList;
