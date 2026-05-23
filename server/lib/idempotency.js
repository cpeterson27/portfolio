async function getRedisHeaders() {
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!process.env.UPSTASH_REDIS_REST_URL || !token) {
    return null;
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}

async function reserveFulfillment(eventId) {
  const headers = await getRedisHeaders();

  if (!headers) {
    return true;
  }

  const baseUrl = process.env.UPSTASH_REDIS_REST_URL.replace(/\/$/, "");
  const key = encodeURIComponent(`stripe:event:${eventId}`);
  const response = await fetch(`${baseUrl}/set/${key}/processing?NX=true&EX=604800`, { headers });

  if (!response.ok) {
    throw new Error(`Unable to reserve fulfillment event ${eventId}`);
  }

  const data = await response.json();
  return data.result === "OK";
}

async function markFulfilled(eventId) {
  const headers = await getRedisHeaders();

  if (!headers) {
    return;
  }

  const baseUrl = process.env.UPSTASH_REDIS_REST_URL.replace(/\/$/, "");
  const key = encodeURIComponent(`stripe:event:${eventId}`);
  await fetch(`${baseUrl}/set/${key}/fulfilled?EX=2592000`, { headers });
}

module.exports = {
  markFulfilled,
  reserveFulfillment,
};
