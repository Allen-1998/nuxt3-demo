import type { IncomingMessage, ServerResponse } from "http";

export default (req: IncomingMessage, res: ServerResponse) => {
  //TODO 不生效
  res.end("Legacy handler");
};
