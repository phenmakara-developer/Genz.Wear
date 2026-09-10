const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || ''
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || ''

export function isTelegramConfigured() {
  return Boolean(BOT_TOKEN && CHAT_ID)
}

function buildOrderText(order) {
  const lines = [
    '🛒 *NEW ORDER*',
    `Order: ${order.id}`,
    `Date: ${new Date(order.date).toLocaleString()}`,
    '',
    '*Customer*',
    `Name: ${order.customer}`,
    `Phone: ${order.phone}`,
    `Email: ${order.email}`,
    `Address: ${order.address}`,
    order.note ? `Note: ${order.note}` : null,
    '',
    '*Items*',
    ...order.items.map((i) => `• ${i.title} x${i.qty} — $${i.price * i.qty}`),
    '',
    `Subtotal: $${order.subtotal}`,
    `Delivery (${order.deliveryMethod}): $${order.shipping || 0}`,
    `*TOTAL: $${order.total}*`,
  ]
  return lines.filter((line) => line != null).join('\n')
}

export async function sendOrderToTelegram(order, screenshotFile) {
  if (!isTelegramConfigured()) {
    throw new Error('Telegram is not configured on this deployment.')
  }

  const api = `https://api.telegram.org/bot${BOT_TOKEN}`
  const text = buildOrderText(order)

  if (screenshotFile) {
    const caption = text.length > 1024 ? `${text.slice(0, 1000)}\n…` : text
    const form = new FormData()
    form.append('chat_id', CHAT_ID)
    form.append('photo', screenshotFile)
    form.append('caption', caption)
    const res = await fetch(`${api}/sendPhoto`, { method: 'POST', body: form })
    if (!res.ok) {
      throw new Error('Failed to send payment screenshot to Telegram.')
    }
    return
  }

  const res = await fetch(`${api}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' }),
  })
  if (!res.ok) {
    throw new Error('Failed to send order to Telegram.')
  }
}