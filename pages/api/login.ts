import type { NextApiRequest, NextApiResponse } from 'next';

// fake login!!
export default (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === 'johndoe@mail.com' && password === 'ecommerce') {
    res.status(200).json({ status: true });
  } else {
    res.status(401).json({ status: false });
  }

}
