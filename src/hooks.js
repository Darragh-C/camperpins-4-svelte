export async function handle({ request, resolve }) {
  const cookies = request.headers.cookie || '';
  const token = cookies.split(';').find(c => c.trim().startsWith('token='));

  request.locals.token = token ? token.split('=')[1] : undefined;

  // Let SvelteKit handle the request as usual
  const response = await resolve(request);

  return {
    ...response,
    headers: {
      ...response.headers,
      'x-custom-header': 'Custom header value',
    },
  };
}

export function getSession({ request }) {
  // Whatever you return here will be available client-side in $session
  return request.locals.session;
  };
}