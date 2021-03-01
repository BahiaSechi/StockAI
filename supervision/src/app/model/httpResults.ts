export interface Series {
  name: string;
  columns: string[];
  values: any[][];
}

export interface Results {
  statement_id: number;
  series: Series[];
}

export interface httpResults {
  results: Results[];
}
