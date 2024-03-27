export interface IJournal {
  id: number;
  text: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  department_id: number;
}
