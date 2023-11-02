const FormErrorMessage = ({ message }: { message: string | undefined }) => {
  if (message) {
    return (
      <p className="absolute bottom-1 pt-1 font-bold text-sm text-red">
        * {message}
      </p>
    );
  }
  return null;
};

export default FormErrorMessage;
