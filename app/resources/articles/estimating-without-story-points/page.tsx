import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Estimating Without Story Points",
  description: "Alternatives to story points and when each approach fits.",
};

export default function EstimatingWithoutStoryPointsPage() {
  return (
    <ArticleLayout
      eyebrow="Article"
      title="Estimating Without Story Points: Alternatives and Trade-offs"
      description="Story points solve a real problem, but they aren't the only solution, and they aren't free of downsides."
      backHref="/resources/articles"
      backLabel="Back to Articles"
    >
      <p>
        Story points exist to abstract away time so teams can compare relative effort without
        pretending to know exact hours. That's a genuinely useful idea. It's also easy to misuse —
        story points frequently drift into a proxy for performance (see the &quot;story point
        inflation&quot; anti-pattern), and estimating every backlog item in points has a real
        facilitation cost that isn't always worth paying.
      </p>

      <h2>Option 1: Throughput-based forecasting (no estimation at all)</h2>
      <p>
        Instead of estimating size, track how many items the team completes per week or sprint
        (throughput) over a rolling window, and forecast based on that historical rate. This works
        well when backlog items are already sliced to a roughly similar size — the &quot;#NoEstimates&quot;
        approach leans on this. The trade-off: it breaks down if item sizes vary wildly, since a
        count of &quot;items done&quot; treats a one-hour fix and a three-day feature the same.
      </p>

      <h2>Option 2: T-shirt sizing (S/M/L/XL)</h2>
      <p>
        A coarser, faster alternative to story points — useful in early refinement to flag which
        items need to be broken down further before detailed planning, without the ceremony of a
        full planning-poker session. Works well as a filter before a more precise estimation
        method, less well as the only estimation the team ever does, since it's too coarse to drive
        a reliable Sprint Planning forecast on its own.
      </p>

      <h2>Option 3: Cycle time forecasting (Monte Carlo-style)</h2>
      <p>
        For flow-based (Kanban/Scrumban) teams, track the cycle time distribution of recently
        completed items and use it to produce a probabilistic forecast (e.g. &quot;based on the last
        30 items, there's an 85% chance this will take 3-7 days once started&quot;). This avoids
        estimation entirely and tends to be more honest about uncertainty than a single-number
        estimate, but it requires a reasonable volume of historical data and a team already
        tracking cycle time consistently.
      </p>

      <h2>Option 4: Keep story points, fix how they're used</h2>
      <p>
        Sometimes the right fix isn't abandoning story points but changing how they're treated:
        never comparing velocity across teams, never using points as an individual performance
        signal, and revisiting the reference stories periodically so the scale doesn't silently
        drift over time. If the team's estimation conversations themselves are valuable (surfacing
        hidden complexity, misunderstood scope) even when the resulting number isn't perfectly
        accurate, that's a real argument for keeping points and fixing the surrounding behavior
        instead of replacing the mechanic.
      </p>

      <h2>Choosing between them</h2>
      <p>
        The deciding factors are usually: how consistent is item size already, how much historical
        data exists, and how much organizational pressure exists to produce a specific committed
        date. A stable team with fairly uniform item sizes and low external pressure for fixed
        dates can often move to throughput-based forecasting with little loss. A team facing heavy
        stakeholder pressure for date commitments may get more mileage from cycle-time-based
        probabilistic forecasts, since they at least represent uncertainty honestly instead of
        implying false precision.
      </p>

      <Callout title="Related pages">
        See <a href="/tools/jira" className="text-brand-600 underline">Jira</a> and{" "}
        <a href="/tools/azure-devops" className="text-brand-600 underline">Azure DevOps</a> for
        where these metrics live in each tool, and{" "}
        <a href="/knowledge/kanban-scrumban" className="text-brand-600 underline">Kanban &amp; Scrumban</a>{" "}
        for more on cycle time and flow metrics.
      </Callout>
    </ArticleLayout>
  );
}
