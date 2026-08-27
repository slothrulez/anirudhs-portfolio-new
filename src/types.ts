export interface ProjectPipelineStep {
  step: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  details: string[];
  pipelineFile?: string;
  pipelineTitle?: string;
  pipelineSteps?: ProjectPipelineStep[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  isCurrent?: boolean;
}

export interface ExplorationTopic {
  id: string;
  title: string;
  description: string;
  tools?: string[];
}

export interface CommunityInvolvement {
  id: string;
  organization: string;
  role: string;
  period?: string;
  roleDescription: string;
  link?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  field: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}
