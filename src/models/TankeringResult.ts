export interface ITankeringResult {
  id: number;
  aircraft: string;
  price_arr: number;
  price_dep: number;
  trip_time: number;
  created_at: Date;
  updated_at: Date;
}
