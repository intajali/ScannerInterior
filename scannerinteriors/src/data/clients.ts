export type ClientLogo = {
  name: string;
  lines: readonly [string] | readonly [string, string];
};

export const clients = [
  { name: "RDB Cinemas", lines: ["RDB", "Cinemas"] },
  { name: "Dollar", lines: ["Dollar"] },
  { name: "Cotton by Century", lines: ["Cotton", "by Century"] },
  { name: "Khaitan", lines: ["Khaitan"] },
  { name: "Jaipan", lines: ["Jaipan"] },
  { name: "Jeet", lines: ["Jeet"] },
  { name: "Jishu Sengupta", lines: ["Jishu", "Sengupta"] },
] as const satisfies readonly ClientLogo[];
