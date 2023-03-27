// Icon.jsx
import IcoMoon from "react-icomoon";
import { Svg, Path } from "react-native-svg";
import iconSet from "../icons/Poli-Icons-v1.0/selection.json";

const Icon = (props) => (
  <IcoMoon
    native
    SvgComponent={Svg}
    PathComponent={Path}
    iconSet={iconSet}
    style={{fill: 'red'}}
    {...props}
  />
);

export default Icon;