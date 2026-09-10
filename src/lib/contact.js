import { sendTelegramText, isTelegramConfigured } from './telegram'

function buildFeedbackText({ type, name, email, rating, message }) {
  const where = type === 'feedback' ? '⭐ *Feedback / Rating*' : '💬 *Contact message*'
  const lines = [
    where,
    `From: ${name || '-'}`,
    `Email: ${email || '-'}`,
    rating ? `Rating: ${rating}/5` : null,
    '',
    message || '-',
  ]
  return lines.filter((line) => line != null).join('\n')
}

export async function sendFeedback({ type, name, email, rating, message }) {
  const payload = { type, name, email, rating, message }

  try {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error('Email backend unavailable')
    return { channel: 'email', ok: true }
  } catch (err) {
    if (isTelegramConfigured()) {
      await sendTelegramText(buildFeedbackText(payload))
      return { channel: 'telegram', ok: true, fallback: true }
    }
    throw err
  }
}