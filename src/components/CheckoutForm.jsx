import { useState } from "react";
import { validateCheckout } from "../utils/validation";

function CheckoutForm({ onSubmit }) {
  const [values, setValues] = useState({ name: "", email: "", address: "" });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateCheckout(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Namn</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">E-post</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="address">Adress</label>
        <input
          id="address"
          name="address"
          type="text"
          value={values.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>

      <button type="submit">Slutför beställning</button>
    </form>
  );
}

export default CheckoutForm;