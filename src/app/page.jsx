import Introduction from "@/components/Introduction/Introduction";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import { skills, work, socialLinks, articleList } from "@/components/Data";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  return (
    <div className="flex flex-col px-4 pt-6 pb-16 lg:px-36 gap-6">
      <Introduction
        className="introduction"
        title={"Software engineer, father, and believer"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
        }
        socialLinks={socialLinks}
      />
      <div className="flex lg:flex-row flex-col justify-between">
        <ArticleCard articleList={articleList} />
        <section className="widget-container flex flex-col gap-6">
          <SignupWidget
            title="Stay up to date"
            content="Get notified when I publish something new, and unsubscribe at any time."
          />
          <WorkWidget
            className="widget"
            title={"Work"}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
            experiences={work}
          />
          <SkillsWidget
            className="widget"
            title={"Skills"}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
            skills={skills}
          />
        </section>
      </div>
    </div>
  );
}
