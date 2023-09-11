export interface IPagination<DATA>{
    page: number;
    results: DATA[];
    total_pages: number;
    total_results: number;
}