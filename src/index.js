import { redFill, blackFill } from "./Colors";
import { clear, Context, Width, Height } from "./Canvas";
import { Draw, Move } from "./Ball";
import { Rectangle } from "./Drawing";
import { Loop } from "./Loop";

console.log("bonki", redFill);

Loop(() => {
  Move();
  clear();
  Rectangle(Context, 0, 0, Width, Height, blackFill);
  Draw(Context);
});
