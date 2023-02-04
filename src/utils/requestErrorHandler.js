const requestErrorHandler = async (error) => {
  if (error) {
    window.location.pathname('./error');
  }
};

export default requestErrorHandler;
