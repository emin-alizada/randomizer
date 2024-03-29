import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const temporary = createTRPCRouter({
  nextRandom: publicProcedure
    .input(z.object({ classId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { classId } = input;

      const students = await ctx.db.student.findMany({
        where: {
          classId,
        },
      });

      return students[Math.floor(Math.random() * students.length)];
    }),
  recordActivity: publicProcedure
    .input(
      z.object({
        activityTypeId: z.number(),
        studentId: z.number(),
        grade: z.number().min(0).max(100),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { activityTypeId, studentId, grade } = input;

      return await ctx.db.activity.create({
        data: {
          activityType: {
            connect: {
              id: activityTypeId,
            },
          },
          student: {
            connect: {
              id: studentId,
            },
          },
          grade,
        },
      });
    }),
});
