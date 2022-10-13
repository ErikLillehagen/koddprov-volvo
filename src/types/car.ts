export interface CarProps {
  id: string;
  modelName: string;
  bodyType: "suv" | "estate" | "sedan";
  modelType: "plug-in hybrid" | "pure electric";
  imageUrl: string;
}
