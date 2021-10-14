import fetcher from '@lib/fetcher';

const handler = async (req, res) => {
  const { method } = req;
  // http methods
  switch (method) {
    case 'GET':
      const subtypes = await fetcher(`${process.env.MTG_API}/subtypes`);
      res.status(200).send(subtypes);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
