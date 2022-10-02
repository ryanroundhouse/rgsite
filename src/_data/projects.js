// const fetch = require('node-fetch');

// // function to get blogposts
// async function getAllProjects() {
//   // max number of records to fetch per query
//   const recordsPerQuery = 100;

//   // number of records to skip (start at 0)
//   let recordsToSkip = 0;

//   let makeNewQuery = true;

//   let projects = [];

//   // make queries until makeNewQuery is set to false
//   while (makeNewQuery) {
//     try {
//       // initiate fetch
//       const data = await fetch('https://rgsite-cms.herokuapp.com/graphql', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify({
//           query: `{
//             projects{
//               id,
//               title,
//               slug,
//               description,
//               github,
//               date,
//               technologies{
//                 name,
//                 logo{
//                   url,
//                   alternativeText,
//                   width,
//                   height
//                 }
//               }
//             }
//           }`,
//         }),
//       });

//       // store the JSON response when promise resolves
//       const response = await data.json();

//       // handle CMS errors
//       if (response.errors) {
//         let errors = response.errors;
//         errors.map((error) => {
//           console.log(error.message);
//         });
//         throw new Error('Houston... We have a CMS problem');
//       }

//       // update projects array with the data from the JSON response
//       projects = projects.concat(response.data.projects);

//       // prepare for next query
//       recordsToSkip += recordsPerQuery;

//       // stop querying if we are getting back less than the records we fetch per query
//       if (response.data.projects.length < recordsPerQuery) {
//         makeNewQuery = false;
//       }
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   // format blogposts objects
//   const projectsFormatted = projects
//     .map((item) => {
//       return {
//         id: item.id,
//         title: item.title,
//         description: item.description,
//         technologies: item.technologies,
//         github: item.github,
//         date: item.date,
//         slug: item.slug,
//       };
//     })
//     .sort((a, b) => {
//       return new Date(b.date) - new Date(a.date);
//     });

//   // return formatted blogposts
//   return projectsFormatted;
// }

// // export for 11ty
// module.exports = getAllProjects;
