import { useState } from 'react';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value
    });

    setMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Employee form submitted successfully!');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Employee Form</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={employee.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    className="form-control"
                    value={employee.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    className="form-control"
                    value={employee.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Salary</label>
                  <input
                    type="number"
                    name="salary"
                    className="form-control"
                    value={employee.salary}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>

              {message && (
                <div className="alert alert-success mt-3 mb-0">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;