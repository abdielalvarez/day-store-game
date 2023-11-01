import ApiService from "../../services/ApiService";

describe('ApiService', () => {
  let apiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  it('should fetch questions successfully', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ data: 'Some data' }),
    });

    const data = await apiService.getQuestions();
    expect(data.data).toBe('Some data');
  });

  it('should handle request errors', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ error: 'Not Found' }),
    });

    try {
      await apiService.getQuestions();
    } catch (error) {
      expect(error.message).toBe('Response is not defined');
    }
  });
});
