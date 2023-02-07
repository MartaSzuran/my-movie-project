const requestErrorHandler = async (error) => {
  if (error) {
    window.location.assign('/error');
  }
};

export default requestErrorHandler;
