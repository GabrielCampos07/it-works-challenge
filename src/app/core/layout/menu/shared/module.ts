export interface res {
  awsFilter: string;
  body: Module[];
  statusCode: number;
}

export interface Module {
  id: number;
  Descricao: string;
  subModulos?: SubModules[];
}

export interface SubModules {
  id: number;
  Descricao: string;
}
