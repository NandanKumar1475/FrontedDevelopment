const Facebook = (prop) => {
  const like = prop.data.like;
  const setLike = () => {
    prop.data.setLike(like + 1); 
  };

  return (
    <>
      <h1>Welcome to Facebook</h1>
      <h2>Post 1</h2>
      <h1>No of likes: {like}</h1>
      <button onClick={setLike}>Like</button>
    </>
  );
};

export default Facebook;
