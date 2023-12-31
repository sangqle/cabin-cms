import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const body = req.body;
    console.log(body);
    res.status(200).json({ message: 'Hello World!' })
}