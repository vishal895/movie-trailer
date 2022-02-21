import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "./config";
import "./SingleContent.css";
import ContentModal from "./ContentModel";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <div className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <div className="subTitle">{date}</div>
      </div>
    </ContentModal>
  );
};

export default SingleContent;