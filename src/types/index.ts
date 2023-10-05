export enum CarColor {
    black = "black",
    red = "red",
    blue = "blue",
    green = "green",
    white = "white",
    orange = "orange",
    silver = "silver",
    yellow = "yellow",
    grey = "grey",
}

export enum CarType {
  electrical = "electrical",
  sport = "sport",
  towWheels = "2-wheels",
}

export interface Car {
  id: string;
  type: CarType;
  name: string;
  description: string;
  price: number;
  color: CarColor;
  image: string;
}
