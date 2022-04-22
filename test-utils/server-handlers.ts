import { rest } from "msw";
// import { API_URL } from "../src/constants";
import { word3 } from "../mocks/mocks";

const handlers = [
  rest.get(`http://localhost:3000/api/main`, (_req, res, ctx) => {
    return res(ctx.json(word3));
  }),
];

export { handlers };
