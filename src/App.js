import React, { useState } from "react";
import Input from './atomComponent/input'
function App() {
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
    errors: {},
  });

  const handleChange = (e) => {
    if (e.target.value) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        errors: Object.assign(formData.errors, { [e.target.name]: "" }),
      });
    } else
      setFormData({
        ...formData,
        [e.target.name]: "",
      });
  };

  const validateForm = () => {
    let { password, confirm_password } = formData;
    let errors = {},
      isValid = true;
    var pattern = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+/*-.])[A-Za-z\d@!@#$%^&*()_+/*-.]{6,}$/
    );
    if (!pattern.test(password)) {
      isValid = false;
      if (!password || password.trim() === "") {
        errors["password"] = "* Password is required";
      } else errors["password"] = "* Password must contain 1 uppercase, 1 lowercase,1 number,1 special character ";
    }
    if (!confirm_password || confirm_password.trim() === "") {
      isValid = false;
      errors["confirm_password"] = "* Confirm password is required";
    }
    if (confirm_password !== password) {
      isValid = false;
      errors["confirm_password"] = "* Password not matched";
    }
    setFormData({ ...formData, errors: errors });
    return isValid;
  };

  let { confirm_password, password, errors } = formData;
  return (
    <section className="login-outer">
      <div className="login-box">
        <h2 className="login-title">Confirm Password</h2>
        <div className="login-form">
          <form>
            <div className="form-group">
              <label>Enter Password</label>
              <Input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
              <p className="error-msg">{errors.password}</p>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <Input
                type="password"
                className="form-control"
                placeholder="Enter Confirm Password"
                name="confirm_password"
                value={confirm_password}
                onChange={(e) => handleChange(e)}
              />
              <p className="error-msg">{errors.confirm_password}</p>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => validateForm()}
            >
              {" "}
              Continue{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
