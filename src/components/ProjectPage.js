import * as React from "react";
import Datas from "../data/landingpage.json";
//import imagePath from "../images/projects/";
import { useStaticQuery, graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        nodes {
          projects {
            framework
            name
            platform
            url
            imageUrl {
              childImageSharp {
                gatsbyImageData(width: 200, formats: AUTO)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div id="projects" className="p-6">
      <div className="title flex justify-center font-bold text-gray text-3xl pt-4">
        Self Projects
      </div>
      <div className="wrap grid grid-cols-4 grid-rows-2 gap-4 text-gray flex-col sm:grid-cols-1 md:grid-cols-3">
        {data.allDataJson.nodes.projects?.map((project) => (
          <div key={project.name} className="card flex flex-col">
            <div className="card-image bg-white rounded-2xl mb-2 h-36 sm:h-48 ">
              <GatsbyImage image={data.childImageSharp} alt={project.name} />
              <a target="_blank" href={project.url}></a>
            </div>
            <a
              target="_blank"
              href={project.url}
              className="text-sm font-medium hover:text-orange delay-75"
            >
              {project.name}
            </a>
            <div className="text-sm font-light">
              {project.platform} - {project.framework}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// const ProjectPage = () => {
//   return (
//     <StaticQuery
//       query={graphql`
//         query MyQuery {
//           allDataJson {
//             nodes {
//               projects {
//                 framework
//                 name
//                 platform
//                 url
//                 imageUrl {
//                   childImageSharp {
//                     gatsbyImageData(width: 200, formats: AUTO)
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={(data) => (
//         <div id="projects" className="p-6">
//           <div className="title flex justify-center font-bold text-gray text-3xl pt-4">
//             Self Projects
//           </div>
//           <div className="wrap grid grid-cols-4 grid-rows-2 gap-4 text-gray flex-col sm:grid-cols-1 md:grid-cols-3">
//             {data.allDataJson.nodes.projects?.map((project) => (
//               <div key={project.name} className="card flex flex-col">
//                 <div className="card-image bg-white rounded-2xl mb-2 h-36 sm:h-48 ">
//                   <GatsbyImage
//                     image={data.childImageSharp}
//                     alt={project.name}
//                   />
//                   <a target="_blank" href={project.url}></a>
//                 </div>
//                 <a
//                   target="_blank"
//                   href={project.url}
//                   className="text-sm font-medium hover:text-orange delay-75"
//                 >
//                   {project.name}
//                 </a>
//                 <div cxlassName="text-sm font-light">
//                   {project.platform} - {project.framework}
//                 </div>
//               </div>
//             ))}
//             {/* <div className="a">{data.allDataJson.nodes.projects.name}</div> */}
//           </div>
//         </div>
//       )}
//     />
//   );
// };

export default ProjectPage;
