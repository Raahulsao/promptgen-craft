
export interface PromptItem {
  id: string;
  originalPrompt: string;
  enhancedPrompt: string;
  category: string;
  timestamp: number;
}

export type PromptCategory = 
  | "General"
  | "Social Media" 
  | "Marketing" 
  | "Coding" 
  | "Writing" 
  | "Business" 
  | "Creative"
  | "Academic";

export interface GeneratePromptRequest {
  prompt: string;
  category: PromptCategory;
}

export interface GeneratePromptResponse {
  enhancedPrompt: string;
}
