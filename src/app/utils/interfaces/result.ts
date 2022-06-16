import { IAuthor } from "./author";
import { IItem } from "./item";

export interface IResult {
  author?: IAuthor;
  categories?: string[];
  items?: IItem[];
}
