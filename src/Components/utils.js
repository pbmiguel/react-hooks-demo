const axios = {
  get: async () => {
    return new Promise((res, err) => {
      return setTimeout(() => {
        return res({
          data: [
            {
              pageid: "1",
              snippet: "Alto mafioso",
              title: Math.random() > 0.5 ? "Pinto Da Costa" : "Don Corleone"
            },
            { pageid: "2", snippet: "Primeiro Ministro", title: "Tone Costa" },
            {
              pageid: "3",
              snippet: "Presidente Republica",
              title: "Marcelo Sousa"
            }
          ]
        });
      }, Math.random() * 1000);
    });
  }
};

export default axios;
