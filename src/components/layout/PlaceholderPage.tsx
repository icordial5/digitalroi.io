import { SEO } from '@/components/ui/SEO';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'motion/react';

interface PageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PageProps) {
  return (
    <Layout>
      <SEO title={title} description={description} />
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">{description}</p>
        <div className="mt-16 p-12 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center min-h-[400px]">
          <p className="text-slate-400 text-lg font-medium">Content for {title} goes here.</p>
        </div>
      </motion.div>
    </Layout>
  );
}
