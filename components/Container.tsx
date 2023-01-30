import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Vishal Patil - FullStack Developer',
    description: `FullStack developer, JavaScript Enthusiast, and Hustler.`,
    image: '/avatar.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-full">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://vishalpatil.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://vishalpatil.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Vishal Patil" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@VishalPatil1810" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <Navbar />
      <main className="flex flex-col justify-start px-8 bg-gray-50 dark:bg-gray-900 h-fit">
        {children}
      </main>
    </div>
  );
}
