import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Scaled Agile Frameworks",
  description: "SAFe, LeSS, Nexus, Scrum@Scale, and the Spotify model compared.",
};

export default function ScaledFrameworksPage() {
  return (
    <ArticleLayout
      eyebrow="Knowledge Hub"
      title="Scaled Agile Frameworks"
      description="When more than one team needs to coordinate on a shared product, several frameworks offer different answers to how."
      backHref="/knowledge"
      backLabel="Back to Knowledge Hub"
    >
      <p>
        Single-team Scrum doesn&apos;t say anything about how multiple teams should coordinate on
        one product. Several frameworks fill that gap, each with a different philosophy about how
        much structure to add.
      </p>

      <h2>SAFe (Scaled Agile Framework)</h2>
      <p>
        SAFe, from Scaled Agile Inc., is the most prescriptive of the group. It organizes teams
        into an <strong>Agile Release Train (ART)</strong> — typically 5-12 teams working toward a
        shared solution on a common cadence — and adds a planning event called{" "}
        <strong>PI Planning</strong> (Program Increment Planning) where all teams on the train plan
        several sprints of work together. Above the ART, SAFe adds portfolio-level layers (Lean
        Portfolio Management) for organizations coordinating many ARTs against strategic themes and
        funding. SAFe ships in configurations — Essential, Large Solution, and Portfolio — so an
        organization can adopt only the layers it needs.
      </p>

      <h2>LeSS (Large-Scale Scrum)</h2>
      <p>
        LeSS takes the opposite approach: rather than adding new layers and roles, it asks &quot;what
        is the least you can add to Scrum to make it work with multiple teams?&quot; A LeSS
        implementation keeps <strong>one Product Backlog, one Product Owner, and one Sprint</strong>{" "}
        shared across all the teams working on the product, with a single Sprint Review and
        (usually) a coordinated approach to planning and retrospectives. For very large
        efforts, <strong>LeSS Huge</strong> adds Area Product Owners, each responsible for a
        requirement area, but still without introducing a separate management layer.
      </p>

      <h2>Nexus</h2>
      <p>
        Nexus, from Scrum.org, is a minimal extension of Scrum aimed at roughly 3-9 teams working
        on one product. It adds a <strong>Nexus Integration Team</strong> accountable for ensuring
        an integrated increment is produced every Sprint, plus a small set of additional events
        (Nexus Sprint Planning, a Nexus Daily Scrum, Refinement) layered directly on top of the
        existing Scrum events each team already runs.
      </p>

      <h2>Scrum@Scale</h2>
      <p>
        Scrum@Scale, developed under Jeff Sutherland, scales by replicating the Scrum unit rather
        than adding a new framework layer. Teams organize into a{" "}
        <strong>Scrum of Scrums</strong>, which can itself be nested into a Scrum of Scrum of
        Scrums as needed. On the product-ownership side, an <strong>Executive MetaScrum</strong>{" "}
        coordinates backlog priorities across teams, while an{" "}
        <strong>Executive Action Team</strong> plays the Scrum Master role for the organization,
        removing impediments that no single team can resolve on its own.
      </p>

      <h2>The Spotify model</h2>
      <p>
        The &quot;Spotify model&quot; describes the organizational structure Spotify&apos;s engineering
        culture used around 2012: autonomous <strong>squads</strong> (small, cross-functional
        teams) grouped into <strong>tribes</strong>, with <strong>chapters</strong> (people with
        the same discipline across squads) and <strong>guilds</strong> (informal communities of
        interest) providing cross-cutting alignment. It is best understood as a description of one
        company&apos;s organizational design at a point in time rather than a formal, prescriptive
        framework — Spotify itself has publicly moved away from parts of it since. Teams borrowing
        the vocabulary should treat it as inspiration for team topology, not a certification-backed
        methodology like SAFe, LeSS, or Nexus.
      </p>

      <h2>Comparison at a glance</h2>
      <div className="not-prose overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-slate-900">Framework</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-900">Best for</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-900">Key mechanism</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-900">Added structure</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="px-4 py-3 font-medium text-slate-900">SAFe</td>
              <td className="px-4 py-3 text-slate-600">Large enterprises, many teams, portfolio-level alignment</td>
              <td className="px-4 py-3 text-slate-600">Agile Release Trains, PI Planning</td>
              <td className="px-4 py-3 text-slate-600">Highest — new roles, ceremonies, and layers</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-slate-900">LeSS</td>
              <td className="px-4 py-3 text-slate-600">Teams that want to stay close to single-team Scrum</td>
              <td className="px-4 py-3 text-slate-600">One backlog, one PO, one Sprint for all teams</td>
              <td className="px-4 py-3 text-slate-600">Minimal — descaling structure, not adding it</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-slate-900">Nexus</td>
              <td className="px-4 py-3 text-slate-600">3-9 teams on one product needing integration focus</td>
              <td className="px-4 py-3 text-slate-600">Nexus Integration Team + extra Scrum events</td>
              <td className="px-4 py-3 text-slate-600">Light — a thin layer over standard Scrum</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-slate-900">Scrum@Scale</td>
              <td className="px-4 py-3 text-slate-600">Organizations wanting to scale Scrum&apos;s own patterns</td>
              <td className="px-4 py-3 text-slate-600">Scrum of Scrums, Executive MetaScrum/Action Team</td>
              <td className="px-4 py-3 text-slate-600">Moderate — networked, not hierarchical</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-slate-900">Spotify model</td>
              <td className="px-4 py-3 text-slate-600">Inspiration for team topology and autonomy</td>
              <td className="px-4 py-3 text-slate-600">Squads, tribes, chapters, guilds</td>
              <td className="px-4 py-3 text-slate-600">N/A — a cultural description, not a framework</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout title="Choosing one" tone="warning">
        Framework choice should follow the actual coordination problem: dependency management
        between a handful of teams on one product favors LeSS or Nexus; portfolio-level funding
        and alignment across many products favors SAFe; an organization that already runs Scrum
        well and wants to network multiple teams without heavy new roles fits Scrum@Scale.
      </Callout>

      <h2>How the Scrum Master's own role changes in each framework</h2>
      <p>
        A Scrum Master moving into a scaled context often finds the role itself shifts, not just
        the surrounding structure:
      </p>
      <ul>
        <li>
          <strong>In SAFe</strong>, a Scrum Master typically still serves one team, but a new role
          — the Release Train Engineer (RTE) — sits above the team level, facilitating the Agile
          Release Train and PI Planning. A Scrum Master with RTE ambitions is effectively looking
          at a promotion path within SAFe specifically.
        </li>
        <li>
          <strong>In LeSS</strong>, there's deliberately no separate scaling role — a small number
          of Scrum Masters serve multiple teams directly, since LeSS's whole philosophy is adding
          as little new structure as possible.
        </li>
        <li>
          <strong>In Nexus</strong>, a Scrum Master might also serve on the Nexus Integration Team
          alongside their normal team accountability, adding a cross-team integration focus on top
          of their existing role.
        </li>
        <li>
          <strong>In Scrum@Scale</strong>, Scrum Masters collectively participate in the Scrum of
          Scrums, and one may take on the Executive Action Team role — effectively a Scrum Master
          for the organization's impediments, not just one team's.
        </li>
      </ul>

      <h2>Adoption difficulty, honestly</h2>
      <p>
        SAFe is the fastest to stand up on paper — it comes with detailed, prescriptive guidance —
        but that same prescriptiveness makes it the hardest to adapt once adopted, and the easiest
        to implement as ceremony without substance. LeSS is the opposite: minimal structure means
        there's less to misconfigure, but it demands more organizational discipline and genuine
        buy-in to work, since there's no detailed playbook to fall back on. Nexus and Scrum@Scale
        sit in between, and both assume the underlying single-team Scrum is already healthy — none
        of these frameworks fix a broken single-team practice by adding structure on top of it.
      </p>
    </ArticleLayout>
  );
}
