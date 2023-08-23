import React from 'react';
import { useRouter } from 'next/router';
import { LocalLibrary, School, } from '@mui/icons-material'; // Import Material-UI icons

import articlesData from '../pages/api/article.json'; // Correct the import path

const ArticlePage = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const icons = {
    LocalLibrary,
    School,
    // Add other icon components here
  };
  
  const { title, content, icon } = article;
  const IconComponent = icons[icon];

  return (
    <section className="bg-gray-100 py-16 h-screen">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <IconComponent fontSize="inherit" className="text-blue-500 mr-2 inline" />
            {title}
          </h1>
          <div className="prose">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  const paths = articlesData.map(article => ({
    params: { slug: article.slug }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const article = articlesData.find(article => article.slug === params.slug);

  return {
    props: {
      article
    },
    revalidate: 1
  };
}

export default ArticlePage;
