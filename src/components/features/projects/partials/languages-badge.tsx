import React from "react";
import { getRepoLanguages } from "@/services/user-github.service";
import {
 SiC,
 SiCmake,
 SiCplusplus,
 SiCss3,
 SiDart,
 SiHtml5,
 SiIterm2,
 SiJavascript,
 SiKotlin,
 SiLaravel,
 SiNixos,
 SiPhp,
 SiPython,
 SiRuby,
 SiSwift,
 SiTypescript,
} from "@icons-pack/react-simple-icons";

type LanguagesBadgeProps = {
 project: any;
};

const LanguagesBadge = (props: LanguagesBadgeProps) => {
 const [repoLanguages, setRepoLanguages] = React.useState<any>(null);
 const [isLoading, setIsLoading] = React.useState<boolean>(true);

 React.useEffect(() => {
  const fetchRepoLanguages = async () => {
   setIsLoading(true);
   try {
    const response = await getRepoLanguages(props.project.owner.login, [
     props.project.name,
    ]);
    const languages = response.data.repo0.languages.edges;
    setRepoLanguages(languages);
   } catch (error) {
    throw new Error(`Error while trying to retrieve languages: ${error}`);
   } finally {
    setTimeout(() => setIsLoading(false), 1000);
   }
  };

  fetchRepoLanguages();
 }, [props.project]);

 if (isLoading) {
  return <LanguagesBadgeSkeleton />;
 }

 const totalSize = repoLanguages.reduce(
  (acc: number, lang: any) => acc + lang.size,
  0
 );

 return (
  <div className="flex flex-col min-w-[80px] gap-2 p-1 float-right my-6">
   <div className="flex flex-row justify-center gap-2">
    {repoLanguages &&
     repoLanguages.map((lang: any, index: number) => {
      let LanguageIcon;
      const language = lang.node.name;
      const color = lang.node.color;

      switch (language) {
       case "JavaScript":
        LanguageIcon = SiJavascript;
        break;
       case "TypeScript":
        LanguageIcon = SiTypescript;
        break;
       case "Python":
        LanguageIcon = SiPython;
        break;
       case "HTML":
        LanguageIcon = SiHtml5;
        break;
       case "CSS":
        LanguageIcon = SiCss3;
        break;
       case "PHP":
        LanguageIcon = SiPhp;
        break;
       case "Blade":
        LanguageIcon = SiLaravel;
        break;
       case "Kotlin":
        LanguageIcon = SiKotlin;
        break;
       case "Objective-C":
        LanguageIcon = SiC;
        break;
       case "Objective-C++":
        LanguageIcon = SiCplusplus;
        break;
       case "Ruby":
        LanguageIcon = SiRuby;
        break;
       case "Shell":
        LanguageIcon = SiIterm2;
        break;
       case "Nix":
        LanguageIcon = SiNixos;
        break;
       case "Dart":
        LanguageIcon = SiDart;
        break;
       case "Swift":
        LanguageIcon = SiSwift;
        break;
       case "CMake":
        LanguageIcon = SiCmake;
        break;
       default:
        return null;
      }

      return (
       <span
        key={index}
        className="flex items-center gap-2"
        title={`${language}: ${((lang.size / totalSize) * 100).toFixed(1)}%`}
       >
        {LanguageIcon && (
         <LanguageIcon
          className="w-3 h-3"
          color={color}
          title={`${language}: ${((lang.size / totalSize) * 100).toFixed(1)}%`}
         />
        )}
       </span>
      );
     })}
   </div>
   <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
    {repoLanguages &&
     repoLanguages.map((lang: any, index: number) => (
      <div
       key={index}
       className="h-full rounded-lg"
       style={{
        width: `${(lang.size / totalSize) * 100}%`,
        backgroundColor: lang.node.color,
        float: "left",
       }}
       title={`${lang.node.name}: ${((lang.size / totalSize) * 100).toFixed(1)}%`}
      />
     ))}
   </div>
  </div>
 );
};

const LanguagesBadgeSkeleton = () => {
 return (
  <div className="flex flex-col gap-2 p-1 float-right my-6">
   <div className="flex flex-row justify-between gap-3">
    {[1, 2, 3].map((index) => (
     <div
      key={index}
      className="w-4 h-4 rounded-sm bg-gray-700 animate-pulse"
     />
    ))}
   </div>
   <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
    <div className="h-full w-full bg-gray-700 animate-pulse" />
   </div>
  </div>
 );
};

export default LanguagesBadge;
