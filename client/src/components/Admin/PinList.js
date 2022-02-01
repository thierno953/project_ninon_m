import React, { useEffect } from "react";
import "./PinList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DataGrid } from "@material-ui/data-grid";
import {
  clearErrors,
  deletePin,
  getAdminPin,
} from "../../redux/actions/pinAction";
import Sidebar from "./Sidebar";
import { DELETE_PIN_RESET } from "../../redux/constants/pinConstant";

const PinList = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, pins } = useSelector((state) => state.pins);
  const { error: deleteError, isDeleted } = useSelector((state) => state.pin);

  const deleteProductHandler = (id) => {
    dispatch(deletePin(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Pin Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_PIN_RESET });
    }

    dispatch(getAdminPin());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Pin ID", minWidth: 200, flex: 0.5 },

    {
      field: "title",
      headerName: "Title",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      type: "number",
      minWidth: 350,
      flex: 0.3,
    },

    {
      field: "category",
      headerName: "Category",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/pin/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Link
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  pins &&
    pins.forEach((item) => {
      rows.push({
        id: item._id,
        title: item.title,
        description: item.description,
        category: item.category,
      });
    });

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_content">
          <Sidebar />
          <div className="productListContainer">
            <h1 id="productListHeading">ALL PINS</h1>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PinList;
