import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Star } from "lucide-react";
import LanguagesBadge from "./languages-badge";

type ProjectArticleProps = {
 project: GitHubRepository;
};

const ProjectArticle = (props: ProjectArticleProps) => {
 const dynamicLink = props.project.homepage
  ? props.project.homepage
  : props.project.html_url;

 return (
  <article className="p-4 md:p-8">
   <div className="flex justify-between gap-2 items-center">
    <span className="text-xs duration-1000 text-zinc-300/70 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
     <time dateTime={new Date(props.project.created_at).toISOString()}>
      {new Date(props.project.created_at).toISOString().substring(0, 10)}
     </time>
    </span>
    <span
     title="Total stars."
     className="text-zinc-300/70 text-sm flex flex-row items-center gap-2 "
    >
     <Star className="w-4 h-4" />{" "}
     {Intl.NumberFormat("en-US", { notation: "compact" }).format(
      props.project.stargazers_count
     )}
    </span>
   </div>

   <Link href={dynamicLink} target="_blank">
    <h2
     className="z-20 text-xl font-medium duration-1000 lg:text-3xl font-display cursor-pointer"
     title={`Click to view the ${props.project.homepage ? "app" : "repo"}.`}
    >
     <span className="bg-gradient-to-r from-zinc-100 to-zinc-300 hover:from-zinc-500 hover:to-zinc-700 text-transparent bg-clip-text">
      {props.project.name}
     </span>
    </h2>
   </Link>
   <p className="z-20 mt-4 text-xs font-sans duration-1000 text-zinc-300/70">
    {props.project.description}
   </p>
   <div className="flex justify-between gap-2 p-1 float-left my-6 border-t-2 border-gray-700">
    <span
     className="text-zinc-300/70 text-[10px] sm:text-xs font-sans"
     title="Go to project repo ?"
    >
     <Link
      href={props.project.html_url}
      target="_blank"
      className="hover:text-zinc-300/30 duration-200 align-middle flex items-center gap-1 tracking-tight"
     >
      <SiGithub className="w-4 h-4" />
      View project repository
     </Link>
    </span>
   </div>
   <LanguagesBadge project={props.project} />
  </article>
 );
};

export default ProjectArticle;
