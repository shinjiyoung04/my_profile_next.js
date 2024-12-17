import dbConnect from '../../utils/dbConnect'
import Advice from '../../models/advice'

export default async function handler(req, res) {
  await dbConnect()

  if (req.method === 'GET') {
    const advices = await Advice.find({})
    res.status(200).json(advices)
  } else if (req.method === 'POST') {
    const ipAddress =
      req.headers['x-forwarded-for'] || req.connection.remoteAddress // IP 주소 가져오기
    const advice = new Advice({ ...req.body, ipAddress })
    await advice.save()
    res.status(201).json(advice)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
