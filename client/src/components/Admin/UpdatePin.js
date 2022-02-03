import React, { useEffect, useState } from "react";
import "./NewPin.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getPinDetails, updatePin } from "../../redux/actions/pinAction";
import { UPDATE_PIN_RESET } from "../../redux/constants/pinConstant";
import Sidebar from "./Sidebar";
import { Button } from "@material-ui/core";

const UpdatePin = ({ history, match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, pin } = useSelector((state) => state.pinDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.pin);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [category, setCategory] = useState("");
  const [property_address, setProperty_address] = useState("");
  const [property_owner, setProperty_owner] = useState("");
  const [function_owner, setFunction_owner] = useState("");
  const [condition_of_the_property, setCondition_of_the_property] = useState("");
  const [occupation, setOccupation] = useState("");
  const [term, setTerm] = useState("");
  const [date_of_entry, setDate_of_entry] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [number_occupants, setNumber_occupants] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const pinId = match.params.id;

  useEffect(() => {
      if(pin && pin._id !== pinId) {
          dispatch(getPinDetails(pinId));
      } else {
          setTitle(pin.title);
          setDescription(pin.description);
          setLong(pin.long);
          setLat(pin.lat);
          setCategory(pin.category)
          setProperty_address(pin.property_address);
          setProperty_owner(pin.property_owner);
          setFunction_owner(pin.function_owner);
          setCondition_of_the_property(pin.condition_of_the_property);
          setOccupation(pin.occupation);
          setTerm(pin.term);
          setDate_of_entry(pin.date_of_entry);
          setRelease_date(pin.release_date);
          setNumber_occupants(pin.number_occupants);
          setOldImages(pin.images);
      }

      if(error) {
          alert.error(error);
          dispatch(clearErrors());
      }
      if(updateError) {
          alert.error(updateError);
          dispatch(clearErrors());
      }

      if(isUpdated) {
        alert.success("Pin Updated Successfully");
        history.push("/admin/pins");
        dispatch({ type: UPDATE_PIN_RESET });
      }
  }, [dispatch, alert, error, history, isUpdated, pinId, pin, updateError]);

  const updatePinSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("title", title);
    formData.set("description", description);
    formData.set("long", long);
    formData.set("lat", lat);
    formData.set("category", category);
    formData.set("property_address", property_address);
    formData.set("property_owner", property_owner);
    formData.set("function_owner", function_owner);
    formData.set("condition_of_the_property", condition_of_the_property);
    formData.set("occupation", occupation);
    formData.set("term", term);
    formData.set("date_of_entry", date_of_entry);
    formData.set("release_date", release_date);
    formData.set("number_occupants", number_occupants);

    images.forEach((image) => {
        formData.append("images", image);
    });
    dispatch(updatePin(pinId, formData));
  };

  const updatePinImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_content">
          <Sidebar className="sidebar" />
          <div className="newProductContainer">
            <form
              className="createProductForm"
              encType="multipart/form-data"
              onSubmit={updatePinSubmitHandler}
            >
              <h1>Update Pin</h1>

              <div>
                <input
                  type="text"
                  placeholder="Title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Longitude"
                  required
                  value={long}
                  onChange={(e) => setLong(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Latitude"
                  required
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Propriété Adresse"
                  required
                  value={property_address}
                  onChange={(e) => setProperty_address(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Propriétaire"
                  required
                  value={property_owner}
                  onChange={(e) => setProperty_owner(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Propriétaire de la fonction"
                  required
                  value={function_owner}
                  onChange={(e) => setFunction_owner(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Etat de la propriété"
                  required
                  value={condition_of_the_property}
                  onChange={(e) => setCondition_of_the_property(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Occupation"
                  required
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Terme"
                  required
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Date d'entrée"
                  required
                  value={date_of_entry}
                  onChange={(e) => setDate_of_entry(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Date de sortie"
                  required
                  value={release_date}
                  onChange={(e) => setRelease_date(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Nombre d'occupants"
                  required
                  value={number_occupants}
                  onChange={(e) => setNumber_occupants(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="5"
                 
                ></textarea>
              </div>

              <div id="createProductFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={updatePinImagesChange}
                  multiple
                />
              </div>

              <div id="createProductFormImage">
                {oldImages &&
                  oldImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt="Old Pin Preview"
                    />
                  ))}
              </div>

              <div id="createProductFormImage">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Pin Preview" />
                ))}
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={loading ? true : false}
              >
                Update
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default UpdatePin;
