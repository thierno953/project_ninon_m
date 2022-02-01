import React, { useEffect, useState } from "react";
import "./NewPin.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { NEW_PIN_RESET } from "../../redux/constants/pinConstant";
import { clearErrors, createPin } from "../../redux/actions/pinAction";
import { Button } from "@material-ui/core";
import Sidebar from "./Sidebar";

const NewPin = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newPin);

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
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Pin Created Successfully!");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PIN_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createHandler = (e) => {
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
      formData.append("images", images);
    });
    dispatch(createPin(formData));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

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
          <Sidebar />
          <div className="newProductContainer">
            <form
              className="createProductForm"
              encType="multipart/form-data"
              onSubmit={createHandler}
            >
              <h1>Create Pin</h1>

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
                  placeholder="Propriété_address"
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
                  onChange={(e) => property_owner(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Propriétaire"
                  required
                  value={property_owner}
                  onChange={(e) => property_owner(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="30"
                  rows="1"
                ></textarea>
              </div>

              <div id="createProductFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={createProductImagesChange}
                  multiple
                />
              </div>

              <div id="createProductFormImage">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
                ))}
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={loading ? true : false}
              >
                Create
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPin;
