import { useGithub } from "@/hooks/use-github";
import { Card } from "@/components/ui/card";
import ProjectArticle from "@/components/features/projects/partials/project-article";
import { chunk } from "lodash";

const ProjectList = () => {
 const { pinnedRepo, repo } = useGithub();

 const pinned = repo.filter((item: any) => pinnedRepo.includes(item.name));

 const sorted = repo
  .filter((item: any) => !item.private)
  .filter((item: any) => !item.fork)
  .filter((item: any) => !item.archived)
  .filter((item: any) => !pinnedRepo.includes(item.name))
  .sort(
   (a: any, b: any) =>
    new Date(b.updated_at ?? Number.POSITIVE_INFINITY).getTime() -
    new Date(a.updated_at ?? Number.POSITIVE_INFINITY).getTime()
  );

 const chunkSize = Math.ceil(sorted.length / 3);

 return (
  <>
   {pinned.length ? (
    <>
     <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
      {pinned[0] || pinned[5] ? (
       <div className="grid grid-cols-1 gap-4">
        {[pinned[0], pinned[5]].map((project) =>
         !project ? null : (
          <Card key={project.name}>
           <ProjectArticle project={project} />
          </Card>
         )
        )}
       </div>
      ) : null}
      {pinned[1] || pinned[2] ? (
       <div className="grid grid-cols-1 gap-4">
        {[pinned[1], pinned[2]].map((project) =>
         !project ? null : (
          <Card key={project.name}>
           <ProjectArticle project={project} />
          </Card>
         )
        )}
       </div>
      ) : null}
     </div>
     <div className="hidden w-full h-px md:block bg-zinc-800" />
    </>
   ) : null}
   <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 lg:grid-cols-3">
    <div className="grid grid-cols-1 space-y-2 lg:space-x-2 gap-4">
     {chunk(sorted, chunkSize)[0]?.map((project: any) => (
      <Card key={project.name}>
       <ProjectArticle project={project} />
      </Card>
     ))}
    </div>
    <div className="grid grid-cols-1 space-y-2 lg:space-x-2 gap-4">
     {chunk(sorted, chunkSize)[1]?.map((project: any) => (
      <Card key={project.name}>
       <ProjectArticle project={project} />
      </Card>
     ))}
    </div>
    <div className="grid grid-cols-1 space-y-2 lg:space-x-2 gap-4">
     {chunk(sorted, chunkSize)[2]?.map((project: any) => (
      <Card key={project.name}>
       <ProjectArticle project={project} />
      </Card>
     ))}
    </div>
   </div>
  </>
 );
};

export default ProjectList;
