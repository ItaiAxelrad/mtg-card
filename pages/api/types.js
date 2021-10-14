import fetcher from '@lib/fetcher';

const handler = async (req, res) => {
  const { method } = req;
  // http methods
  switch (method) {
    case 'GET':
      const types = await fetcher(`${process.env.MTG_API}/types`);
      res.status(200).send(types);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
