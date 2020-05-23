export enum mathOporation {
  multiply = "*",
  divide = "/",
  addition = "+",
  subtraction = "-"
}

export interface PureFunction {
  (initial: number, value: number, oporation: mathOporation): number;
}

export const PureFunction: PureFunction = (initial, value, oporation) => {
  return eval(`${initial}${oporation}${value}`); //Yes, I know eval is evil, it was either this or another todo list app
};
