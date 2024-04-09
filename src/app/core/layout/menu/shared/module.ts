export interface Body {
  body: Module[];
}

export interface Module {
  id: number;
  Descricao: string;
  SubModulos: SubModules[];
}

export interface SubModules {
  id: number;
  Descricao: string;
}
