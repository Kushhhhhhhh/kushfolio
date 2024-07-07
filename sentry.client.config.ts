import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://46966ae282828bcafb211117b93178c8@o4507561064333312.ingest.us.sentry.io/4507561065316352",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    })
  ],
});
