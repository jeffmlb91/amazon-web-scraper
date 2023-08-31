import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    collection_id: string,
    start_eta: number;
};

type Error = {
    error: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    res.status(200).json({ });
}