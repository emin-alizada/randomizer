import { cn } from "~/utils/ui";
import { Button } from "~/components/ui/button";
import { api, type RouterOutputs } from "~/utils/api";
import { useState } from "react";

export default function Home() {
  const [selectedStudent, setSelectedStudent] =
    useState<RouterOutputs["temporary"]["nextRandom"]>();
  const nextRandom = api.temporary.nextRandom.useMutation({
    onSuccess: (data) => {
      setSelectedStudent(data);
    },
  });
  const recordActivity = api.temporary.recordActivity.useMutation({
    onSuccess: (data) => {
      console.log(data);
      setSelectedStudent(undefined);
    },
  });

  return (
    <section>
      <div
        className={cn(
          "flex min-h-dvh flex-col items-center justify-center gap-20 p-24",
        )}
      >
        <h1
          className={cn(
            "text-7xl uppercase tracking-widest",
            "inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent",
          )}
        >
          Randomizer
        </h1>

        {selectedStudent && (
          <>
            <span className={cn("text-lg ")}>
              <span>Selected Student: </span>
              <span className={cn("font-bold")}>
                {selectedStudent.name + " " + selectedStudent.surname}
              </span>
            </span>

            <div className={cn("flex items-center gap-6")}>
              <Button
                variant={"outline"}
                size={"lg"}
                className={cn("text-lg")}
                onClick={() =>
                  recordActivity.mutate({
                    activityTypeId: 1,
                    studentId: selectedStudent.id,
                    grade: Math.floor(0),
                  })
                }
              >
                Not in class 😪
              </Button>

              <Button
                variant={"outline"}
                size={"lg"}
                className={cn("text-lg")}
                onClick={() =>
                  recordActivity.mutate({
                    activityTypeId: 1,
                    studentId: selectedStudent.id,
                    grade: Math.floor(25),
                  })
                }
              >
                Tried their best 🧐
              </Button>

              <Button
                variant={"outline"}
                size={"lg"}
                className={cn("text-lg")}
                onClick={() =>
                  recordActivity.mutate({
                    activityTypeId: 1,
                    studentId: selectedStudent.id,
                    grade: Math.floor(50),
                  })
                }
              >
                Did the job 😮‍💨
              </Button>

              <Button
                variant={"outline"}
                size={"lg"}
                className={cn("text-lg")}
                onClick={() =>
                  recordActivity.mutate({
                    activityTypeId: 1,
                    studentId: selectedStudent.id,
                    grade: Math.floor(75),
                  })
                }
              >
                Easy 🤓
              </Button>

              <Button
                variant={"outline"}
                size={"lg"}
                className={cn("text-lg")}
                onClick={() =>
                  recordActivity.mutate({
                    activityTypeId: 1,
                    studentId: selectedStudent.id,
                    grade: Math.floor(100),
                  })
                }
              >
                Genius 🤯
              </Button>
            </div>
          </>
        )}

        {!selectedStudent && (
          <Button onClick={() => nextRandom.mutate({ classId: 1 })}>
            Spin the wheel!
          </Button>
        )}
      </div>
    </section>
  );
}
