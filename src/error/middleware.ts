import { ErrorRequestHandler } from "express";

export const errorRequestHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next
) => {
  console.error(err);

  res.status(500).json({
    error: {
      message: "Something went wrong",
    },
  });
};
