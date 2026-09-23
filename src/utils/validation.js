export function validateCheckout(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Namn krävs.";
  }

  if (!values.email.trim()) {
    errors.email = "E-post krävs.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Ange en giltig e-postadress.";
  }

  if (!values.address.trim()) {
    errors.address = "Adress krävs.";
  }

  return errors;
}