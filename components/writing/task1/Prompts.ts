export const WRITING_TASK1_PROMPTS: Record<string, { prompt: string; instructions: string; imageDesc?: string }> = {
  'w-t1-1': {
    prompt: "The chart shows fresh fruit exports in 2010.",
    instructions: "Summarise the information by selecting and reporting the main features. Write at least 150 words.",
    imageDesc: "Bar charts showing export figures for various citrus fruits."
  },
  'w-t1-2': {
    prompt: "The first chart shows the percentage of women and men in a country involved in home tasks. The second chart shows time spent on each task.",
    instructions: "Summarise the information by selecting and reporting the main features. Write at least 150 words.",
    imageDesc: "Two bar charts comparing participation and time spent on housework."
  }
};