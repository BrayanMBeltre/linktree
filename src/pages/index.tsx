import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';
import { FiShare } from 'react-icons/fi';

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
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam amet consectetur nobis.',
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
      image:
        'https://d1fdloi71mui9q.cloudfront.net/PQ80HaMlSnCFZhcMWfyb_images.png',
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
              height={100}
              width={100}
              alt='Profile image'
              className='rounded-full'
            />

            <h1 className='mt-4'>{data.name}</h1>

            <p className='mt-2 text-sm text-gray-800'>{data.description}</p>

            {data.links.map((link) => (
              <ButtonLink
                key={link.id}
                className={clsx(
                  'group mt-6 flex w-full items-center justify-between py-0 pl-0'
                )}
                href={link.link}
                variant='light'
              >
                {link.image ? (
                  <Image
                    src={data.image}
                    height={32}
                    width={32}
                    alt='Profile image'
                    className='rounded-sm'
                  />
                ) : (
                  <div />
                )}

                <div>{link.name}</div>

                <div className='opacity-0 group-hover:opacity-100'>
                  <FiShare className='h-4 w-4' />
                </div>
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
