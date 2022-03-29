import { setupServer } from "msw/node";
import { handler } from "./handlers.js";

export const server = setupServer(...handler);
