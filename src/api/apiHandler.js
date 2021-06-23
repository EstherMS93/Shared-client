import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

function errorHandler(error) {
  if (error.response) {
    throw error.response.data;
  }
  throw error;
}

const apiHandler = {
  service,

  addEvent(data) {
    return service
      .post("/api/event", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getEvents() {
    return service
      .get("/api/event")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getEvent(id) {
    return service
      .get(`/api/event/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateEvent(id, data) {
    return service
      .patch(`/api/event/${id}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  removeEvent(id) {
    return service
      .delete(`/api/event/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  }
};

export default apiHandler;