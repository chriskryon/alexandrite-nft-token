import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";

const Blog = () => {
  const t = useTranslations('Blog');

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle title={t('title')} paragraph="" center />

        <div className="mb-5 mt-5 flex flex-col gap-5 text-center sm:flex-row">
          <Link
            href={t('interested-link')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow rounded-sm bg-primary px-2 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            💰 {t('interested')}
          </Link>
          
        </div>

        <div>
          <div className="mb-1 grid grid-cols-1 gap-5 text-center sm:grid-cols-2">
          <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow rounded-sm bg-primary px-2 py-4 text-base font-semibold text-white hover:bg-primary/80"
              >
                💎 {t('appraisal')}
          </Link>
          <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow rounded-sm bg-primary px-2 py-4 text-base font-semibold text-white hover:bg-primary/80"
              >
                📜 {t('certificate')}
          </Link>
            <Link
              href={t('contractual-link')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow rounded-sm bg-primary px-2 py-4 text-base font-semibold text-white hover:bg-primary/80"
            >
              📝 {t('contractual')}
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow rounded-sm bg-primary px-2 py-4 text-base font-semibold text-white hover:bg-primary/80"
            >
              💼 {t('monetization')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
