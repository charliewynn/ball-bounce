import { Add } from "./Math";
import { Width, Height } from "./Canvas";
import { Circle } from "./Drawing";
import { redFill } from "./Colors";

let Location = { x: 5, y: 5 };
const Vector = { x: 1, y: 1 };
const Size = 5;

export const Move = () => {
  Location = Add(Location, Vector);

  //ball bounds
  const right = Location.x + Size;
  const left = Location.x - Size;
  const top = Location.y - Size;
  const bottom = Location.y + Size;

  //if we hit a wall then bounce
  if (left < 0 || right > Width) {
    Vector.x *= -1;
  }
  if (top < 0 || bottom > Height) {
    Vector.y *= -1;
  }
};

export const Draw = context => {
  Circle(context, Location, Size, redFill);
};
