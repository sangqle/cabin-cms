import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('call here')
    const { slug } = req.query
    if (Array.isArray(slug)) {
        res.end(`Post: ${slug.join(', ')}`)
    } else {
        res.end('Invalid slug')
    }
}