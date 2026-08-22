import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BriefingPage } from "@/components/briefing/BriefingPage";
import { briefings, getBriefing } from "@/lib/briefings";

export function generateStaticParams() {
  return briefings.map((briefing) => ({ slug: briefing.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const briefing = getBriefing(slug);
  if (!briefing) return {};

  return {
    title: `${briefing.title} — Manual de identidade | Ace Lab`,
    description: briefing.tagline,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const briefing = getBriefing(slug);
  if (!briefing) notFound();

  return <BriefingPage briefing={briefing} />;
}
