import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const url = process.env.DATABASE_URL ?? env.match(/^DATABASE_URL=(.*)$/m)?.[1]?.replace(/^["']|["']$/g, "");
if (!url) throw new Error("DATABASE_URL não encontrada");

const sql = neon(url);

await sql`
  CREATE TABLE IF NOT EXISTS funnel_leads (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    status text NOT NULL DEFAULT 'em_andamento',
    last_step int NOT NULL DEFAULT 1,
    name text NOT NULL,
    phone text NOT NULL,
    email text NOT NULL,
    business_name text,
    business_segment text,
    has_site text,
    site_url text,
    instagram text,
    instagram_handle text,
    brand_status text,
    experience text,
    services text[] NOT NULL DEFAULT '{}',
    graphic_products text[] NOT NULL DEFAULT '{}',
    references_text text,
    style_notes text,
    goal text,
    timeline text,
    budget text,
    notes text
  )
`;

console.log("Tabela funnel_leads pronta.");
