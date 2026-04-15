import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("contact.sendMessage", () => {
  it("sends a message with valid input", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.sendMessage({
      name: "John Doe",
      email: "john@example.com",
      phone: "0797536577",
      subject: "Appointment Booking",
      message: "I would like to book an appointment for next week.",
    });

    expect(result).toEqual({
      success: true,
      message: "Your message has been sent successfully!",
    });
  });

  it("validates required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.sendMessage({
        name: "",
        email: "john@example.com",
        phone: "0797536577",
        subject: "Appointment Booking",
        message: "I would like to book an appointment.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Name is required");
    }
  });

  it("validates email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.sendMessage({
        name: "John Doe",
        email: "invalid-email",
        phone: "0797536577",
        subject: "Appointment Booking",
        message: "I would like to book an appointment.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid email");
    }
  });

  it("validates phone field", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.sendMessage({
        name: "John Doe",
        email: "john@example.com",
        phone: "",
        subject: "Appointment Booking",
        message: "I would like to book an appointment.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Phone is required");
    }
  });

  it("validates subject field", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.sendMessage({
        name: "John Doe",
        email: "john@example.com",
        phone: "0797536577",
        subject: "",
        message: "I would like to book an appointment.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Subject is required");
    }
  });

  it("validates message field", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.sendMessage({
        name: "John Doe",
        email: "john@example.com",
        phone: "0797536577",
        subject: "Appointment Booking",
        message: "",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Message is required");
    }
  });
});
