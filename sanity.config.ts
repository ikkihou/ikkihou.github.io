import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { projectId, dataset } from "./lib/env.api";

export default defineConfig({
    name: "ikkihou",
    title: "ikkihou.com",
    basePath: "/studio",
    projectId,
    dataset,
    plugins: [structureTool(), visionTool(), codeInput()],
    schema: { types: schemaTypes },
});
