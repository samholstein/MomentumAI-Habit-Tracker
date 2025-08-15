export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center p-8">
      <main className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">MomentumAI Habit Tracker</h1>
        <p className="text-base text-gray-600 dark:text-gray-300">
          Lightweight daily check-ins to build your AI habit. Sign in, log your tool and reflection, and keep your streak alive.
        </p>
        <div className="flex justify-center gap-4">
          <span className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium dark:bg-white dark:text-black">
            Get started
          </span>
        </div>
      </main>
    </div>
  );
}
