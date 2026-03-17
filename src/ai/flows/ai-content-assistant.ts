'use server';
/**
 * @fileOverview An AI content assistant for generating and refining portfolio text.
 *
 * - aiContentAssistant - A function that leverages AI to suggest and refine content for a portfolio.
 * - AiContentAssistantInput - The input type for the aiContentAssistant function.
 * - AiContentAssistantOutput - The return type for the aiContentAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiContentAssistantInputSchema = z.object({
  contentType: z.enum(['project_description', 'tagline', 'about_me']).describe('The type of content to generate or refine.'),
  context: z.string().optional().describe('Additional general context or keywords.'),
  // Fields for project_description
  projectTitle: z.string().optional().describe('Title of the project, required if contentType is project_description.'),
  projectTechStack: z.string().optional().describe('Technology stack used in the project, required if contentType is project_description.'),
  projectGoal: z.string().optional().describe('The main goal or outcome of the project, required if contentType is project_description.'),
  // Fields for tagline
  sectionName: z.string().optional().describe('The name of the section for which to generate a tagline, required if contentType is tagline.'),
  // Fields for about_me
  developerExperience: z.string().optional().describe('Summary of developer experience, required if contentType is about_me.'),
  developerSkills: z.array(z.string()).optional().describe('List of developer skills, required if contentType is about_me.'),
  // Common field for refinement
  currentContent: z.string().optional().describe('The current content to refine or improve.'),
});
export type AiContentAssistantInput = z.infer<typeof AiContentAssistantInputSchema>;

const AiContentAssistantOutputSchema = z.object({
  suggestedContent: z.string().describe('The AI-generated or refined content.'),
  reasoning: z.string().optional().describe('An explanation of the suggestions or refinement.'),
});
export type AiContentAssistantOutput = z.infer<typeof AiContentAssistantOutputSchema>;

export async function aiContentAssistant(input: AiContentAssistantInput): Promise<AiContentAssistantOutput> {
  return aiContentAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiContentAssistantPrompt',
  input: { schema: AiContentAssistantInputSchema },
  output: { schema: AiContentAssistantOutputSchema },
  prompt: `You are an expert content assistant for a professional web developer's portfolio. Your goal is to craft compelling, clear, and SEO-friendly text that highlights the developer's skills and attracts clients and employers. Maintain a professional, confident, and premium tone.

{{#if (eq contentType "project_description")}}
  Generate or refine a project description. Focus on the project's purpose, the developer's role, the technologies used, and the value delivered. Emphasize scalability, performance, and user-focus.
  Project Title: {{{projectTitle}}}
  Tech Stack: {{{projectTechStack}}}
  Project Goal/Outcome: {{{projectGoal}}}
  {{#if currentContent}}
  Current Description to Refine: {{{currentContent}}}
  {{else}}
  Context: {{{context}}}
  {{/if}}
  Please provide a refined, engaging, and professional project description. Also, provide a brief reasoning for your suggestions.
{{else if (eq contentType "tagline")}}
  Craft 1-2 concise and impactful taglines for the "{{{sectionName}}}" section of a web developer's portfolio. The tagline should be professional, confident, and convey value.
  {{#if currentContent}}
  Current Tagline to Refine: {{{currentContent}}}
  {{else}}
  Context/Keywords: {{{context}}}
  {{/if}}
  Please provide the suggested taglines and a brief reasoning for each.
{{else if (eq contentType "about_me")}}
  Generate or refine an "About Me" summary for a web developer. Highlight experience in Laravel, PHP, WordPress, and modern web tools. Showcase expertise in building custom websites, e-commerce platforms, and dynamic web applications.
  Experience Summary: {{{developerExperience}}}
  Key Skills: {{#each developerSkills}} - {{{this}}}{{/each}}
  {{#if currentContent}}
  Current About Me Summary to Refine: {{{currentContent}}}
  {{else}}
  Additional Context: {{{context}}}
  {{/if}}
  Please provide a refined "About Me" summary that is engaging and professional. Also, provide a brief reasoning for your suggestions.
{{/if}}

Provide the output in JSON format with 'suggestedContent' and 'reasoning' fields.`,
});

const aiContentAssistantFlow = ai.defineFlow(
  {
    name: 'aiContentAssistantFlow',
    inputSchema: AiContentAssistantInputSchema,
    outputSchema: AiContentAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  },
);
