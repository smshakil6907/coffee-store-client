import React from "react";
import Swal from "sweetalert2";

export default function AddCoffee() {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-base-200 p-24">
      <h2 className="text-2xl font-bold text-center">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* input 1 */}
        <div className="md:flex items-center justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              name="name"
              type="text"
              placeholder="Coffee name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-4">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              name="quantity"
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* input 2 */}
        <div className="md:flex items-center justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Supplier</span>
            </div>
            <input
              name="supplier"
              type="text"
              placeholder="supplier"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-4">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              name="taste"
              type="text"
              placeholder="taste"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* input 3 */}
        <div className="md:flex items-center justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              name="category"
              type="text"
              placeholder="Enter coffee category"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-4">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              name="details"
              type="text"
              placeholder="Enter coffee details"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* input 4 */}
        <div className="md:flex ml-52 mb-6">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              name="photo"
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <input
          className="btn btn-wide bg-gray-900 text-white ml-52 hover:bg-gray-900"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
}