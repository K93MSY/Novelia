import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  notes: any[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    notes: [
      {
        id: 1,
        title: "Welcome World!",
        text: " Ohayo World",
      },
      {
        id: 2,
        title: "Welcome World!",
        text: " Ohayo World",
      },
    ],
  });
}
