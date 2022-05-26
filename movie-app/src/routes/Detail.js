import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const getInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo(json);
    setLoading(false);
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{info.data.movie.title}</h1>
          <img
            src={info.data.movie.large_cover_image}
            alt={info.data.movie.title}
          />
        </div>
      )}
    </div>
  );
};
export default Detail;
