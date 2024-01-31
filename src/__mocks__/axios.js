const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "John",
          last: "Doe",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/22.jpg",
        },
        login: {
          user: "AlphaBlvck",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
