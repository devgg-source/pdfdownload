import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createMyPetition } from "../actions/petitionActions";
import { PETITION_CREATE_RESET } from "../constants/petitionConstants";

const CreatePetition = ({ history }) => {
  const [sno, setSno] = useState(0);
  const [name, setName] = useState("");
  const [community, setCommunity] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [smartcard, setSmartcard] = useState("");
  const [firkka, setFirkka] = useState("");
  const [village, setVillage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createPetition = useSelector((state) => state.createPetition);
  const { loading, error, success } = createPetition;

  useEffect(() => {
    if (success) {
      dispatch({ type: PETITION_CREATE_RESET });
      navigate("/");
    }

    // eslint-disable-next-line
  }, [success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createMyPetition({
        sno: sno,
        petitionerName: name,
        community: community,
        aadharNumber: aadhar,
        smartCardNumber: smartcard,
        firkka: firkka,
        villageName: village,
      })
    );
  };
  return (
    <form className="Form" onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="sno" className="required">
          SNO
        </label>
        <input
          type="number"
          className="form-control"
          id="sno"
          placeholder=""
          required
          onChange={(e) => setSno(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name" className="required">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder=""
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="community" className="required">
          Community
        </label>
        <input
          type="text"
          className="form-control"
          id="community"
          placeholder=""
          required
          onChange={(e) => setCommunity(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Aadhar" className="required">
          Aadhar Number
        </label>
        <input
          type="text"
          className="form-control"
          id="Aadhar"
          required
          onChange={(e) => setAadhar(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="SmartCard">SmartCardNumber</label>
        <input
          type="text"
          className="form-control"
          id="SmartCard"
          required
          onChange={(e) => setSmartcard(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="firkka">Firkka</label>
        <input
          type="text"
          className="form-control"
          id="firkka"
          onChange={(e) => setFirkka(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="village">Village</label>
        <input
          type="text"
          className="form-control"
          id="village"
          onChange={(e) => setVillage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-add">
        Add
      </button>
    </form>
  );
};

export default CreatePetition;
