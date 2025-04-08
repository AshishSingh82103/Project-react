let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is the current time:{time.toDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
