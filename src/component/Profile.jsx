
import { getImageUrl } from "./Avatar";
export default function Profile({imageId,name,profession,awards,discovery,imageSize=70}){
  return(
    <section>
      <h2>{name}</h2>
      <img 
      src={getImageUrl(imageId)}
      alt={name}
      width = {imageSize}
      height = {imageSize}
      />

      <ul>
        <li>
          <b>Profession:</b>{profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>
          ({awards.join(',')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}