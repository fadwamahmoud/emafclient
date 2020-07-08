import React, { useState, useEffect } from "react";
import MaterialTable, { MTableCell } from "material-table";
import axios from "axios";
export default function MaterialTableDemo() {
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "User Name", field: "username" },
      { title: "Password", field: "password" },
      {
        title: "User role",
        field: "role",
      },
    ],
    data: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_HEROKU_URL}/users/`
      );

      setState({ columns: state.columns, data: result.data });
    };
    fetchData();
  }, []);

  async function addUser(newuser) {
    const result = await axios.post(
      `${process.env.REACT_APP_HEROKU_URL}/users/register`,
      newuser
    );
    if (result.data.message) {
      alert(result.data.message);
    } else {
      console.log(result.data);
      setState({
        columns: state.columns,
        data: [...state.data, result.data],
      });
    }
  }

  async function deleteUser(id) {
    const result = await axios.delete(
      `${process.env.REACT_APP_HEROKU_URL}/users/${id}`
    );
    console.log(result.data);
    setState({ columns: state.columns, data: result.data });
  }

  async function editUser(id, editedUser) {
    const result = await axios.patch(
      `${process.env.REACT_APP_HEROKU_URL}/users/${id}`,
      editedUser
    );

    console.log(result.data.message);
    setState({ columns: state.columns, data: result.data });
  }

  return (
    <MaterialTable
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            resolve();
            addUser(newData);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            const id = oldData._id;
            resolve();

            editUser(id, newData, oldData);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            const id = oldData._id;
            resolve();

            deleteUser(id, oldData);
          }),
      }}
    />
  );
}
