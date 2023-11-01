class ApiService {
    constructor() {
        this.API_URL = '/app/ws/questions';
        this.options = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }

    async throwError(error, assumingIsError = false) {
        if (error instanceof Response) {
            const jsonError = await error.json();
            if (assumingIsError) throw jsonError;
            return jsonError;
        }
        if (assumingIsError) throw error;
        return error;
    }

    async request(apiUrl, options) {
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) await this.throwError(response, true);
            if (response.status === 204) return;
            let data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getQuestions() {
        const apiUrl = `${this.API_URL}`;
        try {
            const data = await this.request(apiUrl, this.options);
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default ApiService;
