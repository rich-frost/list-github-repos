export interface SearchNode {
  id: string;
  name: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
}

export interface SearchEdge {
  node: SearchNode;
}

export interface SearchResults {
  repositoryCount: number;
  edges: SearchEdge[];
}

export interface SearchData {
  search: SearchResults;
}

export interface SearchVars {
  queryString: string;
}
