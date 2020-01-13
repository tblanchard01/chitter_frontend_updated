import nock from "nock";
import {fetchPeeps} from "./fetchPeeps" 

const mockPeeps = [
  {
    id: 3,
    body: "my first peep :)",
    created_at: "2018-06-23T13:21:23.317Z",
    updated_at: "2018-06-23T13:21:23.317Z",
    user: {
      id: 1,
      handle: "kay"
    },
    likes: [
      {
        user: {
          id: 1,
          handle: "kay"
        }
      }
    ]
  }
];

function stubSuccess() {
  nock("https://chitter-backend-api.herokuapp.com/")
    .get("/peeps")
    .reply(200, mockPeeps);
}

describe("Success", () => {
  it("handles 200", async () => {
      stubSuccess(); 
      const res = await fetchPeeps()
      expect(res).toEqual('foo')

  });
});
