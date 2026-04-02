import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "@/components/contact-form";

vi.mock("@/components/theme-provider", () => ({
  useTheme: () => ({ theme: "light", toggleTheme: vi.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  themeInitScript: "",
}));

vi.mock("@/components/language-provider", () => ({
  useLanguage: () => ({
    language: "en",
    toggleLanguage: vi.fn(),
    t: {
      contact: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Your message...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Something went wrong. Please try again.",
        nameRequired: "Name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Please enter a valid email address.",
        messageRequired: "Message is required.",
      },
    },
  }),
}));

describe("ContactForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders all form fields and submit button", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send Message" })).toBeInTheDocument();
  });

  it("shows validation errors when submitting empty form", async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    expect(await screen.findByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
    expect(screen.getByText("Message is required.")).toBeInTheDocument();
  });

  it("shows success message after successful submit", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    render(<ContactForm />);

    // Fill all fields via fireEvent.change
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hello there" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

    await waitFor(() => {
      expect(screen.getByText(/Message sent/)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith("/api/contact", expect.objectContaining({
      method: "POST",
    }));
  });
});
