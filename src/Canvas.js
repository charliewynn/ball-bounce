const Canvas = document.getElementById("canvas");
export const Context = Canvas.getContext("2d");

export const Height = Canvas.height;
export const Width = Canvas.width;

export const clear = () => {
  Context.clearRect(0, 0, Width, Height);
};
