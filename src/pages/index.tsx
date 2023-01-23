import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import Vercel from '~/svg/Vercel.svg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const data = {
  id: 1,
  image: 'https://avatars.githubusercontent.com/u/51127598?v=4',
  name: 'Brayan Beltre',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam amet consectetur nobis distinctio deserunt officia illo officiis repellat corrupti quis dolorem eligendi nostrum, iste tenetur, maxime, sit repellendus magnam.',
  links: [
    {
      id: 1,
      name: 'Facebook',
      link: 'http://facebook.com',
      image: undefined,
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com',
      image: 'https://avatars.githubusercontent.com/u/51127598?v=4',
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com',
      image: 'https://avatars.githubusercontent.com/u/51127598?v=4',
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com',
      image: 'https://avatars.githubusercontent.com/u/51127598?v=4',
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com',
      image: 'https://avatars.githubusercontent.com/u/51127598?v=4',
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com',
      image: 'https://avatars.githubusercontent.com/u/51127598?v=4',
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com',
      image: 'https://avatars.githubusercontent.com/u/51127598?v=4',
    },
  ],
};

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <div className='layout max-w-sm'>
        <nav className='fixed top-4 z-10 w-full max-w-sm'>
          <div className='flex justify-end rounded-md bg-blue-300/30 p-2 backdrop-blur-sm'>
            <Vercel className='text-4xl' />
          </div>
        </nav>
      </div>

      <main className='mt-8'>
        <section className=''>
          <div className='layout relative flex min-h-screen max-w-sm flex-col items-center justify-center py-12 text-center'>
            <Image
              src={data.image}
              height={200}
              width={200}
              alt='Profile image'
            />

            <h1 className='mt-4'>{data.name}</h1>

            <p className='mt-2 text-sm text-gray-800'>{data.description}</p>

            {data.links.map((link) => (
              <ButtonLink
                key={link.id}
                className='mt-6 w-full'
                href={link.link}
                variant='light'
              >
                {link.name}
              </ButtonLink>
            ))}

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://linktr.ee'>Linktree</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
