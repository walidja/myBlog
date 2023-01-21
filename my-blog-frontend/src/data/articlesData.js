const handleRout = async (url, method = "GET", data = null, headers = null) => {
  console.log(headers);
  console.log(`URL: ${url} || Method: ${method} || data: ${data}`);
  const response = await fetch(url, {
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    method: method,
    body: data ? JSON.stringify(data) : null,
  });
  const values = await response.json();
  console.log("request response", values);
  return values;
};

export const getArticles = async () => {
  return await handleRout("/api/articles/");
};

export const getArticle = (name, headers) => {
  return handleRout(`/api/articles/${name}`, "get", null, headers);
};

export const updateUpvotes = (name, headers) => {
  return handleRout(`/api/articles/${name}/upvotes`, "put", null, headers);
};

export const addComment = (name, comment, headers) => {
  return handleRout(`/api/articles/${name}/comments`, "post", comment, headers);
};
