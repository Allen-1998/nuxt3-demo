import type { IncomingMessage, ServerResponse } from "http";
export default (
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
) => {
  console.log("Legacy middleware");
  next();
};
