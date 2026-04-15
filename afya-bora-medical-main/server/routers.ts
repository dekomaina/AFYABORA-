import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    sendMessage: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
          phone: z.string().min(1, "Phone is required"),
          subject: z.string().min(1, "Subject is required"),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Send email to the facility
          const emailBody = `New Contact Form Submission from Afya Bora Medical Website

Name: ${input.name}
Email: ${input.email}
Phone: ${input.phone}
Subject: ${input.subject}

Message:
${input.message}

---
This message was sent from the Afya Bora Medical website contact form.`;

          // Use the notification system to send email to owner
          await notifyOwner({
            title: `New Contact Form: ${input.subject}`,
            content: emailBody,
          });

          return {
            success: true,
            message: "Your message has been sent successfully!",
          };
        } catch (error) {
          console.error("Failed to send contact message:", error);
          return {
            success: false,
            message: "Failed to send message. Please try again.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
