import SvgComponentBootstrap from "./ListIconSvg/SvgComponentBootstrap";
import SvgComponentLaravel from "./ListIconSvg/SvgComponentLaravel";
import { SvgComponentNodejs } from "./ListIconSvg/SvgComponentNodejs";
import SvgComponentReact from "./ListIconSvg/SvgComponentReact";
import SvgComponetAngular from "./ListIconSvg/SvgComponetAngular";

type GreetProps = {
  width: number;
  height: number;
  fill?:string;
};

export const ListIconFramework = (props: GreetProps) => {
  return (
    <div className="d-flex flex-row">
      <SvgComponentNodejs width={props.width} height={props.height} fill={props.fill}/>
      <SvgComponetAngular width={props.width} height={props.height}></SvgComponetAngular>
      <SvgComponentLaravel width={props.width} height={props.height}></SvgComponentLaravel>
      <SvgComponentBootstrap width={props.width} height={props.height}></SvgComponentBootstrap>
      <SvgComponentReact width={props.width} height={props.height}></SvgComponentReact>
    </div>
  );
};
