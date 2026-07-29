import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Agile Values & Principles",
  description: "The four values and twelve principles behind the Agile Manifesto.",
};

export default function AgileManifestoPage() {
  return (
    <ArticleLayout
      eyebrow="Knowledge Hub"
      title="Agile Values & Principles"
      description="What the Agile Manifesto actually says, and what it means for how a team works day to day."
      backHref="/knowledge"
      backLabel="Back to Knowledge Hub"
    >
      <p>
        In February 2001, seventeen software practitioners met and published a short statement of
        shared values and principles that became known as the Agile Manifesto. It was a reaction
        to heavyweight, documentation-driven development processes that struggled to keep up with
        changing requirements. The manifesto is deliberately brief: four value statements and
        twelve supporting principles.
      </p>

      <h2>The four values</h2>
      <p>
        Each value is framed as a preference, not an absolute — the manifesto is explicit that the
        items on the right still have value, but the items on the left matter more when the two
        are in tension:
      </p>
      <ol>
        <li>
          <strong>People and their interactions</strong> matter more than rigid processes and
          tooling. Tools and process exist to serve the team, not the other way around.
        </li>
        <li>
          <strong>Working software</strong> (or, more broadly, a working product) matters more
          than comprehensive documentation. Documentation supports the product; it isn&apos;t the
          deliverable itself.
        </li>
        <li>
          <strong>Collaborating with the customer</strong> matters more than negotiating the exact
          terms of a contract upfront. Ongoing conversation surfaces the real requirement faster
          than a fixed spec does.
        </li>
        <li>
          <strong>Responding to change</strong> matters more than rigidly following a plan made
          months earlier, because plans are based on the least information you&apos;ll ever have
          about the problem.
        </li>
      </ol>

      <h2>The twelve principles, grouped</h2>
      <p>
        The twelve principles that accompany the values expand on how to put them into practice.
        Grouped by theme, they cover:
      </p>
      <h3>Delivering value continuously</h3>
      <ul>
        <li>Satisfy the customer through early and continuous delivery of valuable work.</li>
        <li>Deliver working results frequently, in short cycles rather than long ones.</li>
        <li>Working software (or a working outcome) is the primary measure of progress.</li>
      </ul>
      <h3>Welcoming and managing change</h3>
      <ul>
        <li>Welcome changing requirements, even late in the work — agile processes harness change for the customer&apos;s advantage rather than resisting it.</li>
        <li>Agile processes promote sustainable pace, so the team can keep this up indefinitely rather than burning out.</li>
      </ul>
      <h3>People and collaboration</h3>
      <ul>
        <li>Business people and developers must work together daily throughout the effort.</li>
        <li>Build projects around motivated individuals, give them the environment and support they need, and trust them to get the job done.</li>
        <li>Face-to-face conversation is the most efficient way to convey information within a team.</li>
        <li>The best architectures, requirements, and designs emerge from self-organizing teams.</li>
      </ul>
      <h3>Craftsmanship and reflection</h3>
      <ul>
        <li>Continuous attention to technical excellence and good design enhances agility.</li>
        <li>Simplicity — maximizing the amount of work <em>not</em> done — is essential.</li>
        <li>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</li>
      </ul>

      <h2>What this means in practice</h2>
      <p>
        For a Scrum Master, the values and principles aren&apos;t a poster on the wall — they&apos;re a
        diagnostic tool. When a team argues over which project-management tool to buy instead of
        talking to each other, that&apos;s a signal the first value is being inverted. When a team
        produces a beautifully documented plan for a six-month roadmap and treats deviation from it
        as failure, that&apos;s the fourth value being ignored. Reframing team problems in terms of
        which value is under pressure is often the fastest way to name what&apos;s actually going wrong.
      </p>

      <Callout title="Where this shows up elsewhere on this site">
        The <a href="/knowledge/scrum-framework" className="text-brand-600 underline">Scrum framework</a>{" "}
        is one concrete implementation of these values. The{" "}
        <a href="/knowledge/anti-patterns" className="text-brand-600 underline">anti-patterns page</a>{" "}
        maps common dysfunctions back to the value or principle they violate.
      </Callout>
    </ArticleLayout>
  );
}
