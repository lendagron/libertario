import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,
    models: {
      course: Model,
    },

    seeds(server) {
      server.create("course", { id: "1", name: "Curso 1" });
      server.create("course", { id: "2", name: "Curso 2" });
      server.create("course", { id: "3", name: "Curso 3" });
    },

    routes() {
      this.namespace = "apiMirage";
      this.get("/courses", (schema) => {
        return schema.all("course");
      });
    },
  });

  return server;
}
