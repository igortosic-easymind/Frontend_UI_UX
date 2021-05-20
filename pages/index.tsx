import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import FramerExample from '../components/framer';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <FramerExample />
      <div className="bg-gray-50">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-yellow-600">Ready to dive in?</span>
            <span className="block text-blue-900">
              Start your design with Easymindstudio.
          </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <motion.div variants={item} className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
              >
                Get started
            </a>
            </motion.div>
            <motion.div
              variants={item}
              className="ml-3 inline-flex rounded-md shadow"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50"
              >
                Learn more
            </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </>
  );
}
