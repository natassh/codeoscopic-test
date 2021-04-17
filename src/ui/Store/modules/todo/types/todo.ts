export type Color = {
    hex: string;
    name: string;
}
  
export type Todo = {
    id: number;
    text: string;
    color: Color;
}