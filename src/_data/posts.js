const fetch = require('node-fetch');

// function to get blogposts
async function getAllPosts() {
  // max number of records to fetch per query
  const recordsPerQuery = 100;

  // number of records to skip (start at 0)
  let recordsToSkip = 0;

  let makeNewQuery = true;

  let posts = [];

  // make queries until makeNewQuery is set to false
  while (makeNewQuery) {
    try {
      // initiate fetch
      const data = await fetch('https://rgsite-cms.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `{
            articles{
              id,
              title,
              date,
              published_at,
              content,
              excerpt,
              slug,
              image{
                url,
                alternativeText,
                width,
                height,
                caption,
                previewUrl
              },
              category{
                name
              }
            }
          }`,
        }),
      });

      // store the JSON response when promise resolves
      const response = await data.json();

      // handle CMS errors
      if (response.errors) {
        let errors = response.errors;
        errors.map((error) => {
          console.log(error.message);
        });
        throw new Error('Houston... We have a CMS problem');
      }

      // update posts array with the data from the JSON response
      posts = posts.concat(response.data.articles);

      // prepare for next query
      recordsToSkip += recordsPerQuery;

      // stop querying if we are getting back less than the records we fetch per query
      if (response.data.articles.length < recordsPerQuery) {
        makeNewQuery = false;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  // format blogposts objects
  const postsFormatted = posts
    .filter((item) => {
      const postPublish = new Date(item.published_at);
      const now = new Date();
      return postPublish <= now;
    })
    .map((item) => {
      return {
        id: item.id,
        title: item.title,
        date: item.date,
        excerpt: item.excerpt,
        content: item.content,
        slug: item.slug,
        image: item.image,
        category: item.github,
      };
    })
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

  // return formatted blogposts
  return postsFormatted;
}

// export for 11ty
module.exports = getAllPosts;
