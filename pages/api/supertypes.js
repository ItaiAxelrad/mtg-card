import fetcher from '@lib/fetcher';

const handler = async (req, res) => {
  const { method } = req;
  // http methods
  switch (method) {
    case 'GET':
      const supertypes = await fetcher(`${process.env.MTG_API}/supertypes`);
      res.status(200).send(supertypes);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
