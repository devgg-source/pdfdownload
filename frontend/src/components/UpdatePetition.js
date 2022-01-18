import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getPetitionDetails, updatePetition } from "../actions/petitionActions";
import { PETITION_UPDATE_RESET } from "../constants/petitionConstants";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const UpdatePetition = () => {
  const params = useParams();
  const petitionId = params.id;

  const [sno, setSno] = useState(0);
  const [name, setName] = useState("");
  const [community, setCommunity] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [smartcard, setSmartcard] = useState("");
  const [firkka, setFirkka] = useState("");
  const [village, setVillage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const petitionDetails = useSelector((state) => state.petitionDetails);
  const { loading, error, petition } = petitionDetails;

  const petitionUpdate = useSelector((state) => state.petitionUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = petitionUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PETITION_UPDATE_RESET });
      navigate("/");
    } else {
      if (!petition.sno || petition._id !== petitionId) {
        dispatch(getPetitionDetails(petitionId));
      } else {
        setSno(petition.sno);
        setCommunity(petition.community);
        setAadhar(petition.aadharNumber);
        setFirkka(petition.firkka);
        setName(petition.petitionerName);
        setSmartcard(petition.smartCardNumber);
        setVillage(petition.villageName);
      }
    }
  }, [petition, dispatch, petitionId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePetition({
        _id: petitionId,
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
    <>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : (
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
              value={sno}
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
              value={name}
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
              value={community}
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
              value={aadhar}
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
              value={smartcard}
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
              value={firkka}
              onChange={(e) => setFirkka(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="village">Village</label>
            <input
              type="text"
              className="form-control"
              id="village"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-create" type="submit">
            Update
          </button>
        </form>
      )}
    </>
  );
};

export default UpdatePetition;
