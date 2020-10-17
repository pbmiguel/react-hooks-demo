const axios = {
  get: async () => {
    return new Promise((res, err) => {
      return setTimeout(() => {
        return res({
          data: [
            {
              pageid: "1",
              snippet: "snippet 1",
              title: Math.random() > 0.5 ? "title 1" : "title 1.1"
            },
            { pageid: "2", snippet: "snippet 2", title: "title 2" },
            { pageid: "3", snippet: "snippet 3", title: "title 3" }
          ]
        });
      }, Math.random() * 1000);
    });
  }
};

export default axios;
