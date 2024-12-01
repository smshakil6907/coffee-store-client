import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function Users() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "The user has been deleted.",
                icon: "success",
              });
              // Update local state
              const updatedUsers = users.filter((user) => user.id !== id);
              setUsers(updatedUsers);
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting the user.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl">Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {users.map((user, index) => (
              <tr key={user.id}>
                {" "}
                {/* Add a unique key */}
                <th>{index + 1}</th> {/* Display row number */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button className="btn btn-accent">Edit</button>
                  <button
                    onClick={() => handleUserDelete(user.id)} // Pass `id` to the function
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
