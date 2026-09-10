import nodemailer from 'nodemailer'

const GMAIL_USER = process.env.GMAIL_USER || ''
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || ''
const GMAIL_TO = process.env.GMAIL_TO || GMAIL_USER

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(204).json({})
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' })
    return
  }

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    res.status(500).json({ ok: false, message: 'Mail not configured on the server.' })
    return
  }

  try {
    const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {})
    const { type, name, email, rating, message } = JSON.parse(raw || '{}')

    const where = type === 'feedback' ? 'Feedback / Rating' : 'Contact'
    const subject = `${where}: ${name || 'anonymous'}`
    const text = [
      `${where} from the GENZ WEAR store`,
      '',
      `Name: ${name || '-'}`,
      `Email: ${email || '-'}`,
      rating ? `Rating: ${rating}/5` : null,
      '',
      `Message:`,
      message || '-',
    ]
      .filter((line) => line != null)
      .join('\n')

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    })

    await transporter.sendMail({
      from: `"GENZ WEAR" <${GMAIL_USER}>`,
      to: GMAIL_TO,
      subject,
      text,
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Feedback mail error:', err)
    res.status(500).json({ ok: false, message: 'Failed to send mail.' })
  }
}