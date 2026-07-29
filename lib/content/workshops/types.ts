export interface AgendaStep {
  time: string;
  step: string;
  detail: string;
}

export interface Workshop {
  slug: string;
  category: string;
  title: string;
  duration: string;
  audience: string;
  objective: string;
  whyItMatters: string;
  materials: string[];
  agenda: AgendaStep[];
  facilitatorTips: string[];
}

export interface WorkshopCategory {
  slug: string;
  name: string;
  description: string;
}
