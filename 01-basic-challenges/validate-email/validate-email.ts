const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})*$/;
  return emailRegex.test(email);
};

export default validateEmail;
