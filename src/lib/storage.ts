import { PromptItem } from "@/types";

const HISTORY_KEY = 'prompt-generator-history';
const MAX_HISTORY_ITEMS = 5;

export function savePromptToHistory(item: PromptItem): void {
  const history = getPromptHistory();
  
  // Add new item at the beginning
  const newHistory = [item, ...history];
  
  // Keep only the most recent items
  const trimmedHistory = newHistory.slice(0, MAX_HISTORY_ITEMS);
  
  localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmedHistory));
}

export function getPromptHistory(): PromptItem[] {
  const historyStr = localStorage.getItem(HISTORY_KEY);
  if (!historyStr) return [];
  
  try {
    return JSON.parse(historyStr);
  } catch (e) {
    console.error('Failed to parse prompt history:', e);
    return [];
  }
}

export function clearPromptHistory(): void {
  localStorage.removeItem(HISTORY_KEY);
}
