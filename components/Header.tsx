import { Box } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import NextHead from 'next/head';

interface pageNames {
  pageName: string;
}
const Header: FC<pageNames> = (pageName: pageNames) => {
  const [Title, setTile] = useState(pageName);
  return (
    <NextHead>
      <title>Joseph Kongon | {Title.pageName}</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  );
};

export { Header };
