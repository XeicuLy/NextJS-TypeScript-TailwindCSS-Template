import { Button } from '@mantine/core';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-3xl text-center'>Home</div>
      <div className='text-center'>
        <Button className='text-2xl'>ボタン</Button>
      </div>
    </>
  );
};

export default Home;
