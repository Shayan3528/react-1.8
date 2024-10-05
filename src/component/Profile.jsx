import Avatar from "./Avatar";
import Info from "./Info";

export default function Parent(props) {
 

  return (
    <div>
      <Avatar {...props} />
      <Info age={props.age} />
    </div>
  );

}
