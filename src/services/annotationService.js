import { Api } from "./api";

class AnnotationService {
  static async create(annotation) {
    try {
      const result = await Api.post("/annotations", annotation);

      return result;
    } catch (error) {
      return error;
    }
  }

  static async update(id, data) {
    try {
      console.log(data);
      const result = await Api.patch(`/annotations/${id}`, data);

      return result;
    } catch (error) {
      return error;
    }
  }

  static async getAnnotationById(id) {
    try {
      const result = await Api.get(`/annotations/${id}`);

      return result;
    } catch (error) {
      return error;
    }
  }

  static async getSearchAnnotation(text) {
    try {
      const result = await Api.post("/annotations/fullTextSearch", { text });

      return result;
    } catch (error) {
      return error;
    }
  }

  static async list(userId) {
    try {
      const result = await Api.get("/annotations");

      return result;
    } catch (error) {
      return error;
    }
  }

  static async delete(id) {
    try {
      const result = await Api.delete(`/annotations/${id}`);

      return result;
    } catch (error) {
      return error;
    }
  }
}

export default AnnotationService;
