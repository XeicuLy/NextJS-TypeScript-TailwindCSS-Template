import { NextPage } from 'next';
import Head from 'next/head';
import { ChangeThemeButton } from '@/components/atoms/ChangeThemeButton';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-3xl dark:text-white'>Home</div>
      <span className='group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2 dark:text-white'>
        <ChangeThemeButton />
      </span>
    </>
  );
};
export default Home;
