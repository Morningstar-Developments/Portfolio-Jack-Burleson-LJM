import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${process.env.NEXT_PUBLIC_EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div className="py-8 flex flex-col lg:flex-row justify-center items-center">
          <a
            href="https://github.com/Exios66"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 font-bold hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@axios337"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 font-bold hover:underline"
          >
            Medium
          </a>
          <a
            href="https://linktr.ee/morningstar.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 font-bold hover:underline"
          >
            Linktree
          </a>
        </div>
        <div className="authors">
          <h3>Our Team</h3>
          <ul>
            <li>
              <Image
                src="/assets/blog/authors/lucius-morningstar.jpg"
                alt="Lucius Morningstar"
                width={50}
                height={50}
              />
              <span>Lucius Morningstar</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
