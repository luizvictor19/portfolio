import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/contact/route";

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  it("returns 400 when all fields are missing", async () => {
    const res = await POST(makeRequest({}));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.errors.name).toBeDefined();
    expect(data.errors.email).toBeDefined();
    expect(data.errors.message).toBeDefined();
  });

  it("returns 400 for invalid email format", async () => {
    const res = await POST(
      makeRequest({ name: "John", email: "bad", message: "Hi" })
    );
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.errors.email).toContain("valid email");
  });

  it("returns 200 with valid data", async () => {
    const res = await POST(
      makeRequest({
        name: "John",
        email: "john@example.com",
        message: "Hello",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
  });
});
